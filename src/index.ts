import { availableProcessors } from "./processors/available";
import { createStandardPackageFile } from "./stdpkg";
import type { StandardPackage } from "./stdpkg/types";
import { SOURCE_URL } from "./consts";
import { getParseCheerio } from "./utils/getParseCheerio";
import { logger } from "./loggers";

export async function main() {
  const log = logger("index.main");

  // The package list.
  const packages: StandardPackage<unknown>[] = [];

  log.debug(`Crawling: Homepage: ${SOURCE_URL}`);
  const $ = await getParseCheerio(SOURCE_URL);

  log.debug("Execute processors to make the data packages...");
  const promises = availableProcessors.map(async p => {
    log.info(`Running processors: ${p.name}`);
    const thePackage = await p($);

    log.debug("Checking if the package is an array");
    if (Array.isArray(thePackage)) {
      log.debug("Yes: (thePackage > *) -> packages");
      packages.push(...thePackage);
    } else {
      log.debug("No: thePackage -> packages");
      packages.push(thePackage);
    }
  });

  log.debug("Waiting for promises completed...");
  await Promise.all(promises);

  log.debug("Serializing these packages to a JSON file...");
  packages.forEach((p) => createStandardPackageFile("./data", p));
}
