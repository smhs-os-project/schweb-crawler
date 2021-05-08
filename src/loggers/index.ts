import pino from "pino";

export const rootLogger = pino({
  name: "schweb-crawler",
  level: "debug",
});
export const logger = (component: string) => rootLogger.child({component});
