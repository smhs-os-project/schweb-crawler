export interface Announcement {
    id: string;
    title: string;
    url: string;
    content: string;
}
export interface AnnouncementAttachments<T = {}> {
    name: string;
    url: string;
    extra?: T;
}
export interface AnnouncementContent<T = {}> {
    title: string;
    content: string;
    contentHTML: string;
    attachments: AnnouncementAttachments[];
    extra?: T;
}
//# sourceMappingURL=types.d.ts.map