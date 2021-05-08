import UsefulLink from "./UsefulLink";
import type { Processors } from "./base";
import { AnnouncementsProcessors } from "./Announcements";

export const availableProcessors: Processors[] = [
  UsefulLink,
  ...AnnouncementsProcessors,
];
