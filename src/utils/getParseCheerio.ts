import cheerio, { CheerioAPI } from "cheerio";

export async function getParseCheerio(url: string): Promise<CheerioAPI> {
  const html = await fetch(url).then(r => r.text());
  return cheerio.load(html);
}
