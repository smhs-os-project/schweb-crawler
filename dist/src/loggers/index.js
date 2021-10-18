import pino from "pino";
const transport = pino.transport({
    target: 'pino-pretty',
    options: {
        colorize: process.env['COLORIZE'] === 'true',
        translateTime: true,
    },
    worker: {
        autoEnd: process.env['NODE_ENV'] !== 'test',
    },
});
export const rootLogger = pino({
    name: "schweb-crawler",
    level: "info",
}, transport);
export const logger = (component, extra = {}) => rootLogger.child({ component, ...extra });
//# sourceMappingURL=index.js.map