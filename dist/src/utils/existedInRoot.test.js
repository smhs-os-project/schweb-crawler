"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const existedInRoot_1 = require("./existedInRoot");
test("the existed case", () => {
    existedInRoot_1.existedInRoot(".gitkeep");
});
test("the not existed case", () => {
    existedInRoot_1.existedInRoot(".gitaaaaaa");
});
//# sourceMappingURL=existedInRoot.test.js.map