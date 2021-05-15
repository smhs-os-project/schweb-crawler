import AnnouncementWrapper from "../libs/Announcements";

export const LawAnnouncements = AnnouncementWrapper(
  "#Dyn_1_2 .mtitle > a",
  "law"
);
export const SchoolAnnouncements = AnnouncementWrapper(
  "#Dyn_2_1 .mtitle > a",
  "school"
);
export const GradeAnnouncements = AnnouncementWrapper(
  "#Dyn_2_2 .mtitle > a",
  "grade"
);
export const StudyAnnouncements = AnnouncementWrapper(
  "#Dyn_2_3 .mtitle > a",
  "study"
);
export const ContestAnnouncements = AnnouncementWrapper(
  "#Dyn_1_2_1 .mtitle > a",
  "contest"
);

export const AnnouncementsProcessors = [
  LawAnnouncements,
  SchoolAnnouncements,
  GradeAnnouncements,
  StudyAnnouncements,
  ContestAnnouncements,
];
