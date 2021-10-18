export default {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    testPathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/node_modules/"],
    globals: {
        'ts-jest': {
            useESM: true,
        },
    },
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
};
//# sourceMappingURL=jest.config.js.map