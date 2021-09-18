"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsProcessors = exports.StudyAnnouncements = exports.DocumentsAnnouncements = exports.ContestAnnouncements = exports.LawAnnouncements = exports.GradeAnnouncements = exports.NetworkAnnouncements = exports.SchoolAnnouncements = void 0;
const Announcements_1 = __importDefault(require("../libs/Announcements"));
exports.SchoolAnnouncements = Announcements_1.default("校內訊息公告區", "school");
exports.NetworkAnnouncements = Announcements_1.default("網路公告區", "network");
exports.GradeAnnouncements = Announcements_1.default("升學公告區", "grade");
exports.LawAnnouncements = Announcements_1.default("學校法規公告區", "law");
exports.ContestAnnouncements = Announcements_1.default("競賽活動公告區", "contest");
exports.DocumentsAnnouncements = Announcements_1.default("公文公告區", "documents");
exports.StudyAnnouncements = Announcements_1.default("研習公告區", "study");
exports.AnnouncementsProcessors = [
    exports.LawAnnouncements,
    exports.SchoolAnnouncements,
    exports.NetworkAnnouncements,
    exports.GradeAnnouncements,
    exports.StudyAnnouncements,
    exports.DocumentsAnnouncements,
    exports.ContestAnnouncements,
];
//# sourceMappingURL=index.js.map