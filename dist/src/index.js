import { availableProcessors } from "./processors/available";
import { createStandardPackageFile } from "./stdpkg";
import { DATA_ROOT, SOURCE_URL } from "./consts";
import { getParseCheerio } from "./utils/getParseCheerio";
import { logger } from "./loggers";
export async function main() {
    const log = logger("index.main");
    const packages = [];
    log.debug(`Crawling: Homepage: ${SOURCE_URL}`);
    const $ = await getParseCheerio(SOURCE_URL);
    log.debug("Execute processors to make the data packages...");
    const promises = availableProcessors.map(async (p, index) => {
        const log = logger("index.main", {
            processor: p.name,
            processorIndex: index,
        });
        log.info(`Running processors: ${p.name}`);
        const thePackage = await p($);
        log.debug("Checking if the package is an array");
        if (Array.isArray(thePackage)) {
            log.debug("Yes: (thePackage > *) -> packages");
            packages.push(...thePackage);
        }
        else {
            log.debug("No: thePackage -> packages");
            packages.push(thePackage);
        }
    });
    log.debug("Waiting for promises completed...");
    await Promise.all(promises);
    log.debug("Serializing these packages to a JSON file...");
    packages.forEach((p) => createStandardPackageFile(DATA_ROOT, p));
}
//# sourceMappingURL=index.js.map