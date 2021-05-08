import type { StandardPackage } from "./types";
import fs from "fs-extra";
import path from "path";

/**
 * Serialize the standard package data.
 *
 * @param param0 The standard package.
 * @returns The serialized data of the "data" field in the standard package.
 */
export function serializeStandardPackageData({ data }: StandardPackage<unknown>): string {
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
  return fs.writeFile(path.join(root, pkg.filename), serializeStandardPackageData(pkg));
}
