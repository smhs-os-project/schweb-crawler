import type { StandardPackage } from "./types";
import fs from "fs-extra";
import path from "path";
import { logger } from "../loggers";

/**
 * Serialize the standard package data.
 *
 * @param param0 The standard package.
 * @returns The serialized data of the "data" field in the standard package.
 */
export function serializeStandardPackageData({ data }: StandardPackage<unknown>): string {
  const log = logger("stdpkg.index.serializeStandardPackageData");

  log.debug("serializing a StandardPackage");
  return JSON.stringify({
    at: (new Date()).toISOString(),
    data,
  });
}

/**
 * Create the standard package file in the specified folder.
 *
 * @param root The root of the file.
 * @param pkg The standard package.
 * @param callback The thing to do after writing the file.
 */
export async function createStandardPackageFile(root: string, pkg: StandardPackage<unknown>): Promise<void> {
  const log = logger("stdpkg.index.createStandardPackageFile");
  const p = path.join(root, pkg.filename);

  log.debug(`writing the serialized standard package data to ${p}`);
  return fs.writeFile(p, serializeStandardPackageData(pkg));
}
