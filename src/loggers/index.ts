import pino from "pino";

export const rootLogger = pino({
  name: "schweb-crawler",
  level: "info",
});

/**
 * Create a logger for specified components or stages.
 * @param component The component namespace.
 * @param extra The extra information.
 */
export const logger = (component: string, extra: Record<string, unknown> = {}) => rootLogger.child({component, ...extra});
