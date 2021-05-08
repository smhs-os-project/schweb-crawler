"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.existedInRoot = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const consts_1 = require("../consts");
const loggers_1 = require("../loggers");
function existedInRoot(relativePath) {
    const log = loggers_1.logger("utils.existedInRoot");
    const pathToDetermine = path_1.join(consts_1.DATA_ROOT, relativePath);
    const isExist = fs_1.existsSync(pathToDetermine);
    log.debug(`${pathToDetermine} is existed? ${isExist}`);
    return isExist;
}
exports.existedInRoot = existedInRoot;
//# sourceMappingURL=existedInRoot.js.map