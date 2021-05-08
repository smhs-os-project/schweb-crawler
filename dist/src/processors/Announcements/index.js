"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsProcessors = exports.ContestAnnouncements = exports.StudyAnnouncements = exports.GradeAnnouncements = exports.SchoolAnnouncements = exports.LawAnnouncements = void 0;
const Announcements_1 = __importDefault(require("../libs/Announcements"));
exports.LawAnnouncements = Announcements_1.default("#Dyn_1_2 a", "law");
exports.SchoolAnnouncements = Announcements_1.default("#Dyn_2_1 a", "school");
exports.GradeAnnouncements = Announcements_1.default("#Dyn_2_2 a", "grade");
exports.StudyAnnouncements = Announcements_1.default("#Dyn_2_3 a", "study");
exports.ContestAnnouncements = Announcements_1.default("#Dyn_1_2_1 a", "contest");
exports.AnnouncementsProcessors = [
    exports.LawAnnouncements,
    exports.SchoolAnnouncements,
    exports.GradeAnnouncements,
    exports.StudyAnnouncements,
    exports.ContestAnnouncements,
];
//# sourceMappingURL=index.js.map