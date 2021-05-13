import AnnouncementWrapper from "../libs/Announcements";

export const LawAnnouncements = AnnouncementWrapper("#Dyn_1_2 a", "law");
export const SchoolAnnouncements = AnnouncementWrapper("#Dyn_2_1 a", "school");
export const GradeAnnouncements = AnnouncementWrapper("#Dyn_2_2 a", "grade");
export const StudyAnnouncements = AnnouncementWrapper("#Dyn_2_3 a", "study");
export const ContestAnnouncements = AnnouncementWrapper(
  "#Dyn_1_2_1 a",
  "contest"
);

export const AnnouncementsProcessors = [
  LawAnnouncements,
  SchoolAnnouncements,
  GradeAnnouncements,
  StudyAnnouncements,
  ContestAnnouncements,
];
