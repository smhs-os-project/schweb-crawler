import fetch from "node-fetch";
import cheerio from "cheerio";
import { availableProcessors } from "./processors/available";
import { createStandardPackageFile } from "./stdpkg";

export async function main() {
  const html = await fetch("http://www.smhs.kh.edu.tw").then(r => r.text());
  const $ = cheerio.load(html);

  // Execute processors to make the data packages.
  const packages = availableProcessors.map(p => p($));

  // Then, make these packages a JSON file.
  packages.forEach((p) => createStandardPackageFile("./data", p));
}
