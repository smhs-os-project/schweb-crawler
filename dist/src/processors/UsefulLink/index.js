"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UsefulLink($) {
    const data = [];
    $("#Dyn_1_1 a").each(function () {
        const link = $(this).attr("href");
        if (link) {
            data.push({
                name: $(this).text().trim(),
                link,
            });
        }
    });
    return {
        filename: "useful-link.json",
        data,
    };
}
exports.default = UsefulLink;
//# sourceMappingURL=index.js.map