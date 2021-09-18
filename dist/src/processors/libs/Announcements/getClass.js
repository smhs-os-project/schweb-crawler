"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNamedBlock = void 0;
function getNamedBlock($, mtTitle) {
    return $("div[id^='Dyn_']").filter(function getNamedBlockFilter() {
        return $(this).find("h2.mt-title").text() === mtTitle;
    });
}
exports.getNamedBlock = getNamedBlock;
//# sourceMappingURL=getClass.js.map