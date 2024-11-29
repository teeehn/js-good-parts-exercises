import { mul } from "./mul";

test("mul multiplies 2 numbers.", () => {
  expect(mul(2, 2)).toEqual(4);
  expect(mul(-2, 3)).toEqual(-6);
  expect(mul(10, 10)).toEqual(100);
});

