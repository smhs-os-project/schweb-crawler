"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStandardPackageFile = exports.serializeStandardPackageData = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const loggers_1 = require("../loggers");
function serializeStandardPackageData({ data, }) {
    const log = loggers_1.logger("stdpkg.index.serializeStandardPackageData");
    log.debug("serializing a StandardPackage");
    return JSON.stringify({
        at: new Date().toISOString(),
        data,
    });
}
exports.serializeStandardPackageData = serializeStandardPackageData;
async function createStandardPackageFile(root, pkg) {
    const log = loggers_1.logger("stdpkg.index.createStandardPackageFile");
    const filePath = path_1.default.join(root, pkg.filename);
    log.debug("creating folders that wasn't created before");
    const parentFolder = path_1.default.join(filePath, "..");
    if (!fs_1.default.existsSync(parentFolder))
        await fs_1.default.promises.mkdir(parentFolder, { recursive: true });
    log.debug(`writing the serialized standard package data to ${filePath}`);
    return fs_1.default.promises.writeFile(filePath, serializeStandardPackageData(pkg));
}
exports.createStandardPackageFile = createStandardPackageFile;
//# sourceMappingURL=index.js.map