import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../../../stdpkg/types";
import { Announcement, AnnouncementContent } from "./types";
import { sha256 } from "js-sha256";
import { Processors } from "../../base";
import { AnnouncementContentProcessor } from "./content";
import { logger } from "../../../loggers";
import { existedInRoot } from "../../../utils/existedInRoot";

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

    log.debug("Checking if title and url are existed and the title isn't '更多...'");
    if (title && url && title !== "更多...") {
      log.debug("YES: continue processing");
      log.info(`Processing: [${prefix}] ${title}`)

      log.debug("calculating ID");
      const id = sha256(`${title}${url}`);
      const contentFilename = `./announcements/${prefix}/${id}.json`;

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

      log.debug("processing content");
      log.debug("  - checking if the content has created before")
      if (!existedInRoot(contentFilename)) {
        log.debug("    - NO. fetching and creating the content");
        const content = AnnouncementContentProcessor(url);

        promises.push(content.then((data) => {
          log.debug("pushing the processed announcements content packages to 'packages'");
          packages.push({
            filename: contentFilename,
            data: data as any,
          });
        }).catch(log.error));
      } else log.debug("    - YES. will not fetch it.");
    } else log.debug("NO: stop processing")
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
