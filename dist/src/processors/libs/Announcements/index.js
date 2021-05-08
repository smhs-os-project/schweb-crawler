"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Announcements = void 0;
const js_sha256_1 = require("js-sha256");
function Announcements($, selector, prefix) {
    const announcements = [];
    $(selector).each(function () {
        const title = $(this).attr("title");
        const url = $(this).attr("href");
        if (title && url) {
            announcements.push({
                id: js_sha256_1.sha256(`${title}${url}`),
                title,
                url,
                content: "none",
            });
        }
    });
    return [{
            filename: `${prefix}-announcements.json`,
            data: announcements,
        }];
}
exports.Announcements = Announcements;
function AnnouncementWrapper(selector, prefix) {
    return ($) => Announcements($, selector, prefix);
}
exports.default = AnnouncementWrapper;
//# sourceMappingURL=index.js.map