import type { CheerioAPI } from "cheerio";
import { getParseCheerio } from "../../../utils/getParseCheerio";
import type { AnnouncementAttachments, AnnouncementContent } from "./types";

export async function AnnouncementContentProcessor(url: string): Promise<AnnouncementContent | null> {
  const $ = await getParseCheerio(url);

  return announcementContentParser($);
}

/**
 * Process the attachments in the announcement
 *
 * @param $ The attachment links of the announcement page.
 */
function announcementAttachmentsParser($: CheerioAPI): AnnouncementAttachments[] {
  const attachmentsDOM = $(".mptattach a");
  const attachments: AnnouncementAttachments[] = [];

  attachmentsDOM.each(function () {
    const name = $(this).attr("title");
    const url = $(this).attr("href");

    if (name && url) attachments.push({
      name,
      url,
    });
  });

  return attachments;
}

/**
 * Process the announcement content
 *
 * @param $ The announcement page.
 */
function announcementContentParser($: CheerioAPI): AnnouncementContent | null {
  const titleDOM = $(".hdline");
  const contentDOM = $(".meditor");

  if (!titleDOM.text()) return null;

  return {
    title: titleDOM.text(),
    content: contentDOM.text() || "",
    contentHTML: contentDOM.html() || "",
    attachments: announcementAttachmentsParser($),
    extra: {},
  };
}
