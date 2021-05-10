"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcements = void 0;
const js_sha256_1 = require("js-sha256");
const content_1 = require("./content");
const loggers_1 = require("../../../loggers");
const existedInRoot_1 = require("../../../utils/existedInRoot");
async function Announcements($, selector, prefix) {
    const log = loggers_1.logger("processors.libs.Announcements.index.Announcements");
    const packages = [];
    const announcements = [];
    const promises = [];
    log.debug(`selecting ${selector} and running each function`);
    $(selector).each(function (id) {
        const log = loggers_1.logger("processors.libs.Announcements.index.Announcements", { prefix, each: id });
        log.debug("Extracting 'title' attribute");
        const title = $(this).attr("title");
        log.debug("Extracting 'href' attribute");
        const url = $(this).attr("href");
        log.debug("Checking if title and url are existed and the title isn't '更多...'");
        if (title && url && title !== "更多...") {
            log.debug("YES: continue processing");
            log.info(`Processing: [${prefix}] ${title}`);
            log.debug("calculating ID");
            const id = js_sha256_1.sha256(`${title}${url}`);
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
            log.debug("  - checking if the content has created before");
            if (!existedInRoot_1.existedInRoot(contentFilename)) {
                log.debug("    - NO. fetching and creating the content");
                const content = content_1.AnnouncementContentProcessor(url, `${prefix}-${id}`);
                promises.push(content.then((data) => {
                    log.debug("pushing the processed announcements content packages to 'packages'");
                    packages.push({
                        filename: contentFilename,
                        data: data,
                    });
                }).catch(log.error));
            }
            else
                log.debug("    - YES. will not fetch it.");
        }
        else
            log.debug("NO: stop processing");
    });
    log.debug("Waiting for all promises completed");
    await Promise.all(promises);
    return packages;
}
exports.Announcements = Announcements;
function AnnouncementWrapper(selector, prefix) {
    return ($) => Announcements($, selector, prefix);
}
exports.default = AnnouncementWrapper;
//# sourceMappingURL=index.js.map