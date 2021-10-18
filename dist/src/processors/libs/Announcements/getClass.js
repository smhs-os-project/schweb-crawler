export function getNamedBlock($, mtTitle) {
    return $("div[id^='Dyn_']").filter(function getNamedBlockFilter() {
        return $(this).find("h2.mt-title").text() === mtTitle;
    });
}
//# sourceMappingURL=getClass.js.map