import { relativeUrlParser } from "./content";
const buildAU = (path) => `http://www.smhs.kh.edu.tw${path}`;
describe("relativeUrlParser()", () => {
    it(`/aaa -> ${buildAU("/aaa")}`, () => {
        expect(relativeUrlParser("/aaa")).toBe(buildAU("/aaa"));
    });
    it(`/aaa/bbb -> ${buildAU("/aaa/bbb")}`, () => {
        expect(relativeUrlParser("/aaa/bbb")).toBe(buildAU("/aaa/bbb"));
    });
    it(`/aaa/bbb/ -> ${buildAU("/aaa/bbb/")}`, () => {
        expect(relativeUrlParser("/aaa/bbb/")).toBe(buildAU("/aaa/bbb/"));
    });
    it(`aaa -> ${buildAU("/aaa")}`, () => {
        expect(relativeUrlParser("aaa")).toBe(buildAU("/aaa"));
    });
    it(`aaa/bbb -> ${buildAU("/aaa/bbb")}`, () => {
        expect(relativeUrlParser("aaa/bbb")).toBe(buildAU("/aaa/bbb"));
    });
    it(`aaa/bbb/ -> ${buildAU("/aaa/bbb/")}`, () => {
        expect(relativeUrlParser("aaa/bbb/")).toBe(buildAU("/aaa/bbb/"));
    });
    it(`https://www.google.com/awaw -> https://www.google.com/awaw`, () => {
        expect(relativeUrlParser("https://www.google.com/awaw")).toBe("https://www.google.com/awaw");
    });
    it(`http://www.google.com/awaw -> http://www.google.com/awaw`, () => {
        expect(relativeUrlParser("http://www.google.com/awaw")).toBe("http://www.google.com/awaw");
    });
    it(`/http -> ${buildAU("/http")}`, () => {
        expect(relativeUrlParser("/http")).toBe(buildAU("/http"));
    });
});
//# sourceMappingURL=content.test.js.map