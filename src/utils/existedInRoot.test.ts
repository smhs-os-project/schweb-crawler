import { existedInRoot } from "./existedInRoot"

test("the existed case", () => {
  existedInRoot(".gitkeep");
});

test("the not existed case", () => {
  existedInRoot(".gitaaaaaa");
});
