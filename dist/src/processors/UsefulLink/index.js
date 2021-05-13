"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loggers_1 = require("../../loggers");
async function UsefulLink($) {
    const log = loggers_1.logger("processors.UsefulLink.UsefulLink");
    const data = [];
    log.debug("selecting `#Dyn_1_1 a` and running a 'each' function");
    $("#Dyn_1_1 a").each(function UsefulLinkEachFunction(each) {
        const log = loggers_1.logger("processors.UsefulLink.UsefulLink.UsefulLinkEachFunction", { each });
        log.debug(`getting 'href' attribute`);
        const link = $(this).attr("href");
        log.debug(`checking if the 'href' attribute is in this element`);
        if (link) {
            log.debug(`YES: pushing to the list`);
            const name = $(this).text().trim();
            log.info(`Processing: ${name}`);
            data.push({
                name,
                link,
            });
        }
        else {
            log.debug("NO: do nothing");
            log.warn("Weird case: The 'href' attribute isn't there");
            log.warn($(this).html() || "<no data>");
        }
    });
    log.debug(`constructing StandardPackage`);
    return {
        filename: "useful-link.json",
        data,
    };
}
exports.default = UsefulLink;
//# sourceMappingURL=index.js.map