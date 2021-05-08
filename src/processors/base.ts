import type { CheerioAPI } from "cheerio";
import type { StandardPackage } from "../stdpkg/types";

/**
 * A standard processors.
 */
export type Processors = ($: CheerioAPI) => StandardPackage<unknown> | StandardPackage<unknown>[];
