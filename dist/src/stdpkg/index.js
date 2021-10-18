import fs from "fs";
import path from "path";
import { logger } from "../loggers";
export function serializeStandardPackageData({ data, }) {
    const log = logger("stdpkg.index.serializeStandardPackageData");
    log.debug("serializing a StandardPackage");
    return JSON.stringify({
        at: new Date().toISOString(),
        data,
    });
}
export async function createStandardPackageFile(root, pkg) {
    const log = logger("stdpkg.index.createStandardPackageFile");
    const filePath = path.join(root, pkg.filename);
    log.debug("creating folders that wasn't created before");
    const parentFolder = path.join(filePath, "..");
    if (!fs.existsSync(parentFolder))
        await fs.promises.mkdir(parentFolder, { recursive: true });
    log.debug(`writing the serialized standard package data to ${filePath}`);
    return fs.promises.writeFile(filePath, serializeStandardPackageData(pkg));
}
//# sourceMappingURL=index.js.map