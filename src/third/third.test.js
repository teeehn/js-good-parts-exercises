import { third } from "./third";

test("third returns true only for whole multiples of 3 and 0.", () => {
  expect(third(0)).toBe(true);
  expect(third(1)).toBe(false);
  expect(third(2)).toBe(false);
  expect(third(3)).toBe(true);
  expect(third(5)).toBe(false);
  expect(third(6)).toBe(true);
});

