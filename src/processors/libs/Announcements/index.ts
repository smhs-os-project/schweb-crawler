import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../../../stdpkg/types";
import { Announcement, AnnouncementContent } from "./types";
import { sha256 } from "js-sha256";
import { Processors } from "../../base";
import { AnnouncementContentProcessor } from "./content";
import { logger } from "../../../loggers";

export async function Announcements(
  $: CheerioAPI,
  selector: string,
  prefix: string
): Promise<StandardPackage<Announcement[] | AnnouncementContent<{}>>[]> {
  const log = logger("processors.libs.Announcements.index.Announcements");
  const packages: StandardPackage<Announcement[] | AnnouncementContent>[] = [];
  const announcements: Announcement[] = [];
  const promises: Promise<void>[] = [];

  log.debug(`selecting ${selector} and running each function`);
  $(selector).each(function (id) {
    const log = logger(`processors.libs.Announcements.index.Announcements#Each:${id}`);

    log.debug("Extracting 'title' attribute");
    const title = $(this).attr("title");
    log.debug("Extracting 'href' attribute")
    const url = $(this).attr("href");

    log.debug("Checking if title and url are existed");
    if (title && url) {
      log.debug("YES: continue processing");
      log.info(`Processing: [${prefix}] ${title}`)

      log.debug("processing content");
      const content = AnnouncementContentProcessor(url);
      log.debug("calculating ID");
      const id = sha256(`${title}${url}`);
      const contentFilename = `./${prefix}-announcements-${id}.json`;

      log.debug("pushing the processed announcements list to 'announcements'");
      announcements.push({
        id,
        title,
        url,
        content: contentFilename,
      });

      log.debug("pushing the processed announcements list packages to 'packages'");
      packages.push({
        filename: `${prefix}-announcements.json`,
        data: announcements,
      });

      promises.push(content.then((data) => {
        log.debug("pushing the processed announcements content packages to 'packages'");
        packages.push({
          filename: contentFilename,
          data: data as any,
        });
      }).catch(log.error));
    }
  });

  log.debug("Waiting for all promises completed");
  await Promise.all(promises);

  return packages;
}

export default function AnnouncementWrapper(
  selector: string,
  prefix: string
): Processors {
  return ($) => Announcements($, selector, prefix);
}
