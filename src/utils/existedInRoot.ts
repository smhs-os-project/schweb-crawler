import { existsSync } from "fs";
import { join } from "path";
import { DATA_ROOT } from "../consts";
import { logger } from "../loggers";

export function existedInRoot(relativePath: string) {
  const log = logger("utils.existedInRoot");
  const pathToDetermine = join(DATA_ROOT, relativePath);
  const isExist = existsSync(pathToDetermine);

  log.debug(`${pathToDetermine} is existed? ${isExist}`);
  return isExist;
}
