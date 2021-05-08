import type { CheerioAPI } from "cheerio";
import { logger } from "../../../loggers";
import { getParseCheerio } from "../../../utils/getParseCheerio";
import type { AnnouncementAttachments, AnnouncementContent } from "./types";

export async function AnnouncementContentProcessor(url: string): Promise<AnnouncementContent | null> {
  const log = logger("processors.libs.Announcements.content.AnnouncementContentProcessor");

  log.debug("getting the URL data");
  const $ = await getParseCheerio(url);

  log.debug("parsing the data and return it");
  return announcementContentParser($);
}

/**
 * Process the attachments in the announcement
 *
 * @param $ The attachment links of the announcement page.
 */
function announcementAttachmentsParser($: CheerioAPI): AnnouncementAttachments[] {
  const log = logger("processors.libs.Announcements.content.announcementAttachmentsParser");
  const attachments: AnnouncementAttachments[] = [];

  log.debug("extracting the attachments");
  const attachmentsDOM = $(".mptattach a");

  log.debug("start running each function");
  attachmentsDOM.each(function (id) {
    const log = logger(`processors.libs.Announcements.content.announcementAttachmentsParser#Each:${id}`);

    log.debug("extracting 'title' attribute");
    const name = $(this).attr("title");
    log.debug("extracting 'href' attribute");
    const url = $(this).attr("href");

    log.debug("checking if name & url are not undefined");
    if (name && url) {
      log.debug("YES: pushing these to 'attachments'")
      attachments.push({
        name,
        url,
      });
    } else {
      log.debug("NO.");
      log.warn("Weird case: The 'title' or 'href' attribute isn't there");
      log.warn($(this).html() || "<no data>");
    }
  });

  return attachments;
}

/**
 * Process the announcement content
 *
 * @param $ The announcement page.
 */
function announcementContentParser($: CheerioAPI): AnnouncementContent | null {
  const log = logger("processors.libs.Announcements.content.announcementContentParser");

  log.debug("getting the title DOM");
  const titleDOM = $(".hdline");
  log.debug("getting the content DOM");
  const contentDOM = $(".meditor");

  log.debug("checking if the titleDOM is empty");
  if (!titleDOM.text()) {
    log.debug("YES: the titleDOM is empty.")
    log.warn("Weird case: The '.hdline' class isn't there");
    log.warn($.html() || "<no data>");
    return null;
  } else log.debug("NO: continue");

  log.debug("returning the content");
  return {
    title: titleDOM.text(),
    content: contentDOM.text() || "",
    contentHTML: contentDOM.html() || "",
    attachments: announcementAttachmentsParser($),
    extra: {},
  };
}
