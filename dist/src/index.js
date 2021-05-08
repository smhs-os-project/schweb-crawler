"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const available_1 = require("./processors/available");
const stdpkg_1 = require("./stdpkg");
const consts_1 = require("./consts");
const getParseCheerio_1 = require("./utils/getParseCheerio");
async function main() {
    const $ = await getParseCheerio_1.getParseCheerio(consts_1.SOURCE_URL);
    const packages = [];
    available_1.availableProcessors.forEach(p => {
        const thePackage = p($);
        if (Array.isArray(thePackage)) {
            packages.push(...thePackage);
        }
        else {
            packages.push(thePackage);
        }
    });
    packages.forEach((p) => stdpkg_1.createStandardPackageFile("./data", p));
}
exports.main = main;
//# sourceMappingURL=index.js.map