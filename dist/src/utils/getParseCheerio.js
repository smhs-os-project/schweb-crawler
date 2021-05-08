"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParseCheerio = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const loggers_1 = require("../loggers");
async function getParseCheerio(url) {
    const log = loggers_1.logger("utils.getParseCheerio");
    log.debug("getting the HTML raw data");
    const html = await node_fetch_1.default(url).then(r => r.text());
    log.debug("load the data as a CheerioAPI");
    return cheerio_1.default.load(html);
}
exports.getParseCheerio = getParseCheerio;
//# sourceMappingURL=getParseCheerio.js.map