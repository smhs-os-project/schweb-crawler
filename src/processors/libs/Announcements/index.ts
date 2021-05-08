import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../../../stdpkg/types";
import { Announcement, AnnouncementContent } from "./types";
import { sha256 } from "js-sha256";
import { Processors } from "../../base";
import { AnnouncementContentProcessor } from "./content";

export function Announcements(
  $: CheerioAPI,
  selector: string,
  prefix: string
): StandardPackage<Announcement[] | AnnouncementContent>[] {
  const packages: StandardPackage<Announcement[] | AnnouncementContent>[] = [];
  const announcements: Announcement[] = [];

  $(selector).each(function () {
    const title = $(this).attr("title");
    const url = $(this).attr("href");

    if (title && url) {
      console.log(`processing: ${prefix}: ${title}`);
      const content = AnnouncementContentProcessor(url);
      const id = sha256(`${title}${url}`);
      const contentFilename = `./${prefix}-announcements-${id}.json`;

      announcements.push({
        id,
        title,
        url,
        content: contentFilename,
      });

      packages.push({
        filename: `${prefix}-announcements.json`,
        data: announcements,
      });

      content.then((data) => {
        packages.push({
          filename: contentFilename,
          data: data as any,
        });
      });
    }
  });

  return packages;
}

export default function AnnouncementWrapper(
  selector: string,
  prefix: string
): Processors {
  return ($) => Announcements($, selector, prefix);
}
