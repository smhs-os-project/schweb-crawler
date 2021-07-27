"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const content_1 = require("./content");
const buildAU = (path) => `http://www.smhs.kh.edu.tw${path}`;
describe("relativeUrlParser()", () => {
    it(`/aaa -> ${buildAU("/aaa")}`, () => {
        expect(content_1.relativeUrlParser("/aaa")).toBe(buildAU("/aaa"));
    });
    it(`/aaa/bbb -> ${buildAU("/aaa/bbb")}`, () => {
        expect(content_1.relativeUrlParser("/aaa/bbb")).toBe(buildAU("/aaa/bbb"));
    });
    it(`/aaa/bbb/ -> ${buildAU("/aaa/bbb/")}`, () => {
        expect(content_1.relativeUrlParser("/aaa/bbb/")).toBe(buildAU("/aaa/bbb/"));
    });
    it(`aaa -> ${buildAU("/aaa")}`, () => {
        expect(content_1.relativeUrlParser("aaa")).toBe(buildAU("/aaa"));
    });
    it(`aaa/bbb -> ${buildAU("/aaa/bbb")}`, () => {
        expect(content_1.relativeUrlParser("aaa/bbb")).toBe(buildAU("/aaa/bbb"));
    });
    it(`aaa/bbb/ -> ${buildAU("/aaa/bbb/")}`, () => {
        expect(content_1.relativeUrlParser("aaa/bbb/")).toBe(buildAU("/aaa/bbb/"));
    });
    it(`https://www.google.com/awaw -> https://www.google.com/awaw`, () => {
        expect(content_1.relativeUrlParser("https://www.google.com/awaw")).toBe("https://www.google.com/awaw");
    });
    it(`http://www.google.com/awaw -> http://www.google.com/awaw`, () => {
        expect(content_1.relativeUrlParser("http://www.google.com/awaw")).toBe("http://www.google.com/awaw");
    });
    it(`/http -> ${buildAU("/http")}`, () => {
        expect(content_1.relativeUrlParser("/http")).toBe(buildAU("/http"));
    });
});
//# sourceMappingURL=content.test.js.map