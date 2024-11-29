import { sub } from "./sub";

test("sub subtracts 2 numbers.", () => {
  expect(sub(2, 2)).toEqual(0);
  expect(sub(5, 2)).toEqual(3);
  expect(sub(2, 4)).toEqual(-2);
});

