import type { CheerioAPI } from "cheerio";
import { logger } from "../../loggers";
import type { StandardPackage } from "../../stdpkg/types";
import type { UsefulLinkStructure } from "./types";

export default function UsefulLink($: CheerioAPI): StandardPackage<UsefulLinkStructure[]> {
  const log = logger("processors.UsefulLink.UsefulLink");
  const data: UsefulLinkStructure[] = [];

  log.debug("selecting `#Dyn_1_1 a` and running a 'each' function");
  $("#Dyn_1_1 a").each(function (id) {
    const log = logger(`processors.UsefulLink.UsefulLink#Each:${id}`);
    log.debug(`getting 'href' attribute`);
    const link = $(this).attr("href");

    log.debug(`checking if the 'href' attribute is in this element`);
    if (link) {
      log.debug(`YES: pushing to the list`);

      const name = $(this).text().trim();
      log.info(`Processing: ${name}`)
      data.push({
        name,
        link,
      });
    } else {
      log.debug("NO: do nothing");
      log.warn("Weird case: The 'href' attribute isn't there");
      log.warn($(this).html() || "<no data>");
    }
  });

  log.debug(`constructing StandardPackage`);
  return {
    filename: "useful-link.json",
    data,
  };
}
