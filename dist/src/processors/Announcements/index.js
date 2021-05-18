"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsProcessors = exports.ContestAnnouncements = exports.DocumentsAnnouncements = exports.StudyAnnouncements = exports.GradeAnnouncements = exports.WirelessAndTimetableAnnouncements = exports.SchoolAnnouncements = exports.LawAnnouncements = void 0;
const Announcements_1 = __importDefault(require("../libs/Announcements"));
exports.LawAnnouncements = Announcements_1.default("#Dyn_1_2 .mtitle > a", "law");
exports.SchoolAnnouncements = Announcements_1.default("#Dyn_2_1 .mtitle > a", "school");
exports.WirelessAndTimetableAnnouncements = Announcements_1.default("#Dyn_2_2 .mtitle > a", "wireless-and-timetable");
exports.GradeAnnouncements = Announcements_1.default("#Dyn_2_3 .mtitle > a", "grade");
exports.StudyAnnouncements = Announcements_1.default("#Dyn_2_4 .mtitle > a", "study");
exports.DocumentsAnnouncements = Announcements_1.default("#Dyn_1_1_1 .mtitle > a", "documents");
exports.ContestAnnouncements = Announcements_1.default("#Dyn_1_2_1 .mtitle > a", "contest");
exports.AnnouncementsProcessors = [
    exports.LawAnnouncements,
    exports.SchoolAnnouncements,
    exports.WirelessAndTimetableAnnouncements,
    exports.GradeAnnouncements,
    exports.StudyAnnouncements,
    exports.DocumentsAnnouncements,
    exports.ContestAnnouncements,
];
//# sourceMappingURL=index.js.map