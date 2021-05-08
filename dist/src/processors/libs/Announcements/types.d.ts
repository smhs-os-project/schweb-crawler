export interface Announcement {
    id: string;
    title: string;
    url: string;
}
export declare type FetchedAnnouncementList = [];
export interface AnnouncementContent<T = {}> {
    title: string;
    content: string;
    attachments: {
        name: string;
        url: string;
    };
    extra: T;
}
//# sourceMappingURL=types.d.ts.map