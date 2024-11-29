import { limit } from "./limit";
import { add } from "../add/add";

test("limit returns a function that allows it to be called no more times than the limit passed.", () => {
  const add_ltd = limit(add, 1);
  expect(add_ltd(2, 2)).toEqual(4);
  expect(add_ltd(2, 2)).toBe(undefined);
});

