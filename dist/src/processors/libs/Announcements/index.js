import { sha256 } from "js-sha256";
import { AnnouncementContentProcessor } from "./content";
import { logger } from "../../../loggers";
import { existedInRoot } from "../../../utils/existedInRoot";
import { getNamedBlock } from "./getClass";
export async function Announcements($, category, prefix) {
    const log = logger("processors.libs.Announcements.index.Announcements");
    const packages = [];
    const announcements = [];
    const promises = [];
    log.debug(`finding the category "${category}" and running each function`);
    getNamedBlock($, category)
        .find(".mtitle > a")
        .each(function AnnouncementsEachFunction(each) {
        const entry = $(this);
        const log = logger("processors.libs.Announcements.index.Announcements.AnnouncementsEachFunction", {
            prefix,
            each,
        });
        log.debug("Extracting 'title' attribute");
        const title = entry.attr("title");
        log.debug("Extracting 'href' attribute");
        const url = entry.attr("href");
        log.debug("Checking if title and url are existed and the title isn't '更多...'");
        if (title && url && title !== "更多...") {
            log.debug("YES: continue processing");
            log.info(`Processing: [${prefix}] ${title}`);
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
            log.debug("  - checking if the content has created before");
            if (!existedInRoot(contentFilename)) {
                log.debug("    - NO. fetching and creating the content");
                const content = AnnouncementContentProcessor(url, `${prefix}-${id}`);
                promises.push(content
                    .then((data) => {
                    log.debug("pushing the processed announcements content packages to 'packages'");
                    packages.push({
                        filename: contentFilename,
                        data: data,
                    });
                })
                    .catch(log.error.bind(log)));
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
export default function AnnouncementWrapper(category, prefix) {
    return ($) => Announcements($, category, prefix);
}
//# sourceMappingURL=index.js.map