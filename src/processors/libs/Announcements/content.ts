import type { CheerioAPI } from "cheerio";
import { logger } from "../../../loggers";
import { getParseCheerio } from "../../../utils/getParseCheerio";
import type { AnnouncementAttachments, AnnouncementContent } from "./types";

/**
 * Convert a relative URL to the absolute form.
 *
 * @param {string} url A url regardless of the absolute one or the relative one.
 * @return {string} The converted absolute URL. If the original one is
 * the relative form, its base will be "http://www.smhs.kh.edu.tw".
 */
function relativeUrlParser(url: string): string {
  // this includes "http" and "https".
  if (url.startsWith("http")) return url;

  // replace all `/uri` to `uri`, and leave `uri` as it is.
  // smhs.kh.edu.tw doesn't support HTTPS protocol until now,
  // so DON'T CHANGE http:// to https:// !!
  return `http://www.smhs.kh.edu.tw/${url.replace(/^\//, "")}`;
}

/**
 * Process the attachments in the announcement
 *
 * @param $ The attachment links of the announcement page.
 * @param identifier The identifier of this action.
 */
function announcementAttachmentsParser(
  $: CheerioAPI,
  identifier: string
): AnnouncementAttachments[] {
  const log = logger(
    "processors.libs.Announcements.content.announcementAttachmentsParser",
    { identifier }
  );
  const attachments: AnnouncementAttachments[] = [];

  log.debug("extracting the attachments");
  const $attachments = $(".mptattach a");

  log.debug("start running each function");
  $attachments.each(function attachmentsEachFunction(each) {
    const log = logger(
      "processors.libs.Announcements.content.announcementAttachmentsParser.attachmentsEachFunction",
      { identifier, each }
    );

    log.debug("extracting 'title' attribute");
    const name = $(this).attr("title");
    log.debug("extracting 'href' attribute");
    const url = $(this).attr("href");

    log.debug("checking if name & url are not undefined");
    if (name && url) {
      log.debug("YES: pushing these to 'attachments'");
      attachments.push({
        name,
        url: relativeUrlParser(url),
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
 * @param identifier The identifier of this action.
 */
function announcementContentParser(
  $: CheerioAPI,
  identifier: string
): AnnouncementContent | null {
  const log = logger(
    "processors.libs.Announcements.content.announcementContentParser",
    { identifier }
  );

  log.debug("getting the title DOM");
  const $title = $(".hdline");
  log.debug("getting the content DOM");
  const $content = $(".mcont .meditor");

  log.debug("checking if the titleDOM is empty");
  if (!$title.text()) {
    log.debug("YES: the titleDOM is empty.");
    log.warn("Weird case: The '.hdline' class isn't there");
    log.warn($.html() || "<no data>");
    return null;
  }
  log.debug("NO: continue");

  log.debug("returning the content");
  return {
    title: $title.text(),
    content: $content.text() || "",
    contentHTML: $content.html() || "",
    attachments: announcementAttachmentsParser($, identifier),
    extra: {},
  };
}

export async function AnnouncementContentProcessor(
  url: string,
  identifier: string = "unnamed"
): Promise<AnnouncementContent | null> {
  const log = logger(
    "processors.libs.Announcements.content.AnnouncementContentProcessor",
    { identifier }
  );

  log.debug("getting the URL data");
  const $ = await getParseCheerio(relativeUrlParser(url));

  log.debug("parsing the data and return it");
  return announcementContentParser($, identifier);
}
