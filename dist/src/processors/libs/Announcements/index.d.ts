import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../../../stdpkg/types";
import { Announcement, AnnouncementContent } from "./types";
import { Processors } from "../../base";
export declare function Announcements($: CheerioAPI, selector: string, prefix: string): Promise<StandardPackage<Announcement[] | AnnouncementContent<{}>>[]>;
export default function AnnouncementWrapper(selector: string, prefix: string): Processors;
//# sourceMappingURL=index.d.ts.map