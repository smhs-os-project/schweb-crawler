import pino from "pino";

const transport = pino.transport({
  target: 'pino-pretty',
  options: {
    colorize: process.env['COLORIZE'] === 'true',
    translateTime: true,
  }
})

export const rootLogger = pino({
  name: "schweb-crawler",
  level: "info",
}, transport);

/**
 * Create a logger for specified components or stages.
 * @param component The component namespace.
 * @param extra The extra information.
 */
export const logger = (
  component: string,
  extra: Record<string, unknown> = {}
) => rootLogger.child({ component, ...extra });
