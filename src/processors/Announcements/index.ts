import AnnouncementWrapper from "../libs/Announcements";

export const SchoolAnnouncements = AnnouncementWrapper(
  "#Dyn_2_1 .mtitle > a",
  "school"
);
export const WirelessAndTimetableAnnouncements = AnnouncementWrapper(
  "#Dyn_2_2 .mtitle > a",
  "wireless-and-timetable"
);
export const GradeAnnouncements = AnnouncementWrapper(
  "#Dyn_2_3 .mtitle > a",
  "grade"
);
export const LawAnnouncements = AnnouncementWrapper(
  "#Dyn_1_1_1 .mtitle > a",
  "law"
);
export const ContestAnnouncements = AnnouncementWrapper(
  "#Dyn_1_2_1 .mtitle > a",
  "contest"
);
export const StudyAnnouncements = AnnouncementWrapper(
  "#Dyn_1_2_2 .mtitle > a",
  "study"
);
export const DocumentsAnnouncements = AnnouncementWrapper(
  "#Dyn_1_1_2 .mtitle > a",
  "documents"
);

export const AnnouncementsProcessors = [
  LawAnnouncements,
  SchoolAnnouncements,
  WirelessAndTimetableAnnouncements,
  GradeAnnouncements,
  StudyAnnouncements,
  DocumentsAnnouncements,
  ContestAnnouncements,
];
