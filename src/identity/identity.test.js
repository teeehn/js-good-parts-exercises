import { identity } from "./identity";

test("Identity returns the argument entered.", () => {
  expect(identity(1)).toBe(1);
  expect(identity("abc")).toBe("abc");
  expect(identity([1, "a", 33])).toStrictEqual([1, "a", 33]);
});

