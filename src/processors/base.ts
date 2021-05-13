import type { CheerioAPI } from "cheerio";
import type { StandardPackage } from "../stdpkg/types";

/**
 * A standard processors.
 */
export type Processors = (
  $: CheerioAPI
) => Promise<StandardPackage<unknown> | StandardPackage<unknown>[]>;
