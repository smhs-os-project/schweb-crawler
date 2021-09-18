import { CheerioAPI } from "cheerio";

export function getNamedBlock($: CheerioAPI, mtTitle: string) {
  return $("div[id^='Dyn_']").filter(function getNamedBlockFilter() {
    return $(this).find("h2.mt-title").text() === mtTitle;
  });
}
