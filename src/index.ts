import { availableProcessors } from "./processors/available";
import { createStandardPackageFile } from "./stdpkg";
import type { StandardPackage } from "./stdpkg/types";
import { SOURCE_URL } from "./consts";
import { getParseCheerio } from "./utils/getParseCheerio";

export async function main() {
  const $ = await getParseCheerio(SOURCE_URL);

  // The package list.
  const packages: StandardPackage<unknown>[] = [];

  // Execute processors to make the data packages.
  availableProcessors.forEach(p => {
    const thePackage = p($);

    if (Array.isArray(thePackage)) {
      packages.push(...thePackage);
    } else {
      packages.push(thePackage);
    }
  });

  // Then, make these packages a JSON file.
  packages.forEach((p) => createStandardPackageFile("./data", p));
}
