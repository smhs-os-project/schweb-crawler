import AnnouncementWrapper from "../libs/Announcements";
export const SchoolAnnouncements = AnnouncementWrapper("校內訊息公告區", "school");
export const NetworkAnnouncements = AnnouncementWrapper("網路公告區", "network");
export const GradeAnnouncements = AnnouncementWrapper("升學公告區", "grade");
export const LawAnnouncements = AnnouncementWrapper("學校法規公告區", "law");
export const ContestAnnouncements = AnnouncementWrapper("競賽活動公告區", "contest");
export const DocumentsAnnouncements = AnnouncementWrapper("公文公告區", "documents");
export const StudyAnnouncements = AnnouncementWrapper("研習公告區", "study");
export const AnnouncementsProcessors = [
    LawAnnouncements,
    SchoolAnnouncements,
    NetworkAnnouncements,
    GradeAnnouncements,
    StudyAnnouncements,
    DocumentsAnnouncements,
    ContestAnnouncements,
];
//# sourceMappingURL=index.js.map