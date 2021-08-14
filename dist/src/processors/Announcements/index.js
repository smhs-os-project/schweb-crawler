"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementsProcessors = exports.StudyAnnouncements = exports.DocumentsAnnouncements = exports.ContestAnnouncements = exports.LawAnnouncements = exports.GradeAnnouncements = exports.WirelessAnnouncements = exports.TimetableAnnouncements = exports.SchoolAnnouncements = void 0;
const Announcements_1 = __importDefault(require("../libs/Announcements"));
exports.SchoolAnnouncements = Announcements_1.default("#Dyn_2_1 .mtitle > a", "school");
exports.TimetableAnnouncements = Announcements_1.default("#Dyn_2_2 .mtitle > a", "timetable");
exports.WirelessAnnouncements = Announcements_1.default("#Dyn_2_3 .mtitle > a", "wireless");
exports.GradeAnnouncements = Announcements_1.default("#Dyn_2_4 .mtitle > a", "grade");
exports.LawAnnouncements = Announcements_1.default("#Dyn_1_1_1 .mtitle > a", "law");
exports.ContestAnnouncements = Announcements_1.default("#Dyn_1_2_1 .mtitle > a", "contest");
exports.DocumentsAnnouncements = Announcements_1.default("#Dyn_1_1_2 .mtitle > a", "documents");
exports.StudyAnnouncements = Announcements_1.default("#Dyn_1_2_2 .mtitle > a", "study");
exports.AnnouncementsProcessors = [
    exports.LawAnnouncements,
    exports.SchoolAnnouncements,
    exports.WirelessAnnouncements,
    exports.TimetableAnnouncements,
    exports.GradeAnnouncements,
    exports.StudyAnnouncements,
    exports.DocumentsAnnouncements,
    exports.ContestAnnouncements,
];
//# sourceMappingURL=index.js.map