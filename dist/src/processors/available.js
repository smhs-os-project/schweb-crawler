"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.availableProcessors = void 0;
const UsefulLink_1 = __importDefault(require("./UsefulLink"));
const Announcements_1 = require("./Announcements");
exports.availableProcessors = [
    UsefulLink_1.default,
    ...Announcements_1.AnnouncementsProcessors,
];
//# sourceMappingURL=available.js.map