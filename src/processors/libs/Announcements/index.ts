import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../../../stdpkg/types";
import { Announcement, AnnouncementContent } from "./types";
import { sha256 } from "js-sha256";
import { Processors } from "../../base";

export function Announcements($: CheerioAPI, selector: string, prefix: string): StandardPackage<Announcement[] | AnnouncementContent>[] {
  const announcements: Announcement[] = [];

  $(selector).each(function () {
    const title = $(this).attr("title");
    const url = $(this).attr("href");

    if (title && url) {
      announcements.push({
        id: sha256(`${title}${url}`),
        title,
        url,
      });
    }
  });

  return [{
    filename: `${prefix}-announcements.json`,
    data: announcements,
  }];
}

export default function AnnouncementWrapper(selector: string, prefix: string): Processors {
  return ($) => Announcements($, selector, prefix);
}
