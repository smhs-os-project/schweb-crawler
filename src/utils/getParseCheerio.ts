import cheerio, { CheerioAPI } from "cheerio";
import fetch from "node-fetch";
import { logger } from "../loggers";

export async function getParseCheerio(url: string): Promise<CheerioAPI> {
  const log = logger("utils.getParseCheerio");

  log.debug("getting the HTML raw data");
  log.debug(`URL: ${url}`);
  const html = await fetch(url).then((r) => r.text());

  log.debug("load the data as a CheerioAPI");
  return cheerio.load(html);
}
