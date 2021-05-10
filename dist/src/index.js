"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const available_1 = require("./processors/available");
const stdpkg_1 = require("./stdpkg");
const consts_1 = require("./consts");
const getParseCheerio_1 = require("./utils/getParseCheerio");
const loggers_1 = require("./loggers");
async function main() {
    const log = loggers_1.logger("index.main");
    const packages = [];
    log.debug(`Crawling: Homepage: ${consts_1.SOURCE_URL}`);
    const $ = await getParseCheerio_1.getParseCheerio(consts_1.SOURCE_URL);
    log.debug("Execute processors to make the data packages...");
    const promises = available_1.availableProcessors.map(async (p, index) => {
        const log = loggers_1.logger("index.main", { processor: p.name, processorIndex: index });
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
    packages.forEach((p) => stdpkg_1.createStandardPackageFile(consts_1.DATA_ROOT, p));
}
exports.main = main;
//# sourceMappingURL=index.js.map