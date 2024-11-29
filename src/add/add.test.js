import { add } from "./add";

test("add function add 2 numbers.", () => {
  expect(add(2, 2)).toEqual(4);
  expect(add(10, 9)).toEqual(19);
});

