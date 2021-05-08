import { CheerioAPI } from "cheerio";
import { StandardPackage } from "../stdpkg/types";

/**
 * A standard processors.
 */
export type Processors = ($: CheerioAPI) => StandardPackage<unknown>;
