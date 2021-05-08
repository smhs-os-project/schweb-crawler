"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStandardPackageFile = exports.serializeStandardPackageData = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
function serializeStandardPackageData({ data }) {
    return JSON.stringify({
        at: (new Date()).toISOString(),
        data,
    });
}
exports.serializeStandardPackageData = serializeStandardPackageData;
async function createStandardPackageFile(root, pkg) {
    return fs_extra_1.default.writeFile(path_1.default.join(root, pkg.filename), serializeStandardPackageData(pkg));
}
exports.createStandardPackageFile = createStandardPackageFile;
//# sourceMappingURL=index.js.map