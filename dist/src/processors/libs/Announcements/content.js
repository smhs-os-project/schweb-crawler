"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementContentProcessor = void 0;
const loggers_1 = require("../../../loggers");
const getParseCheerio_1 = require("../../../utils/getParseCheerio");
async function AnnouncementContentProcessor(url, identifier = "unnamed") {
    const log = loggers_1.logger("processors.libs.Announcements.content.AnnouncementContentProcessor", { identifier });
    log.debug("getting the URL data");
    const $ = await getParseCheerio_1.getParseCheerio(url);
    log.debug("parsing the data and return it");
    return announcementContentParser($, identifier);
}
exports.AnnouncementContentProcessor = AnnouncementContentProcessor;
function announcementAttachmentsParser($, identifier) {
    const log = loggers_1.logger("processors.libs.Announcements.content.announcementAttachmentsParser", { identifier });
    const attachments = [];
    log.debug("extracting the attachments");
    const $attachments = $(".mptattach a");
    log.debug("start running each function");
    $attachments.each(function (id) {
        const log = loggers_1.logger("processors.libs.Announcements.content.announcementAttachmentsParser", { identifier, each: id });
        log.debug("extracting 'title' attribute");
        const name = $(this).attr("title");
        log.debug("extracting 'href' attribute");
        const url = $(this).attr("href");
        log.debug("checking if name & url are not undefined");
        if (name && url) {
            log.debug("YES: pushing these to 'attachments'");
            attachments.push({
                name,
                url,
            });
        }
        else {
            log.debug("NO.");
            log.warn("Weird case: The 'title' or 'href' attribute isn't there");
            log.warn($(this).html() || "<no data>");
        }
    });
    return attachments;
}
function announcementContentParser($, identifier) {
    const log = loggers_1.logger("processors.libs.Announcements.content.announcementContentParser", { identifier });
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
    else
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
//# sourceMappingURL=content.js.map