import pino from "pino";

export const rootLogger = pino({
  name: "schweb-crawler",
  level: "info",
});
export const logger = (component: string) => rootLogger.child({component});
