import type { CheerioAPI } from "cheerio";
import type { StandardPackage } from "../../stdpkg/types";
import { LawAnnouncementsStructure } from "./types";

export default function LawAnnouncements($: CheerioAPI): StandardPackage<LawAnnouncementsStructure[]> {
  const data: LawAnnouncementsStructure[] = [];

  $("#Dyn_1_1 a").each(function () {
    const link = $(this).attr("href");

    if (link) {
      data.push({
        name: $(this).text().trim(),
        link,
      });
    }
  });

  return {
    filename: "useful-link.json",
    data,
  };
}
