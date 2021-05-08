"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParseCheerio = void 0;
const cheerio_1 = __importDefault(require("cheerio"));
const node_fetch_1 = __importDefault(require("node-fetch"));
async function getParseCheerio(url) {
    const html = await node_fetch_1.default(url).then(r => r.text());
    return cheerio_1.default.load(html);
}
exports.getParseCheerio = getParseCheerio;
//# sourceMappingURL=getParseCheerio.js.map