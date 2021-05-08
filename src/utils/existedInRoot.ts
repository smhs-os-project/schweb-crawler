import { existsSync } from "fs";
import { join } from "path";
import { DATA_ROOT } from "../consts";

export function existedInRoot(relativePath: string) {
  return existsSync(join(DATA_ROOT, relativePath));
}
