"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.rootLogger = void 0;
const pino_1 = __importDefault(require("pino"));
exports.rootLogger = pino_1.default({
    name: "schweb-crawler",
    level: "debug",
});
const logger = (component, extra = {}) => exports.rootLogger.child({ component, ...extra });
exports.logger = logger;
//# sourceMappingURL=index.js.map