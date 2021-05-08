import type { CheerioAPI } from "cheerio";
import type { StandardPackage } from "../../stdpkg/types";
import type { UsefulLinkStructure } from "./types";

export default function UsefulLink($: CheerioAPI): StandardPackage<UsefulLinkStructure[]> {
  const data: UsefulLinkStructure[] = [];

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
