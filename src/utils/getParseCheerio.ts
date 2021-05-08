import cheerio, { CheerioAPI } from "cheerio";
import fetch from "node-fetch";

export async function getParseCheerio(url: string): Promise<CheerioAPI> {
  const html = await fetch(url).then(r => r.text());
  return cheerio.load(html);
}
