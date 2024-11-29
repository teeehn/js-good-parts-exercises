import { curry } from "./curry";
import { add } from "../add/add";
import { mul } from "../mul/mul";

test("curry adds a constant when passed add function and a constant.", () => {
  const add5 = curry(add, 5);
  expect(add5(1)).toEqual(6);
  expect(add5(5)).toEqual(10);
  expect(add5(10)).toEqual(15);
});

test("curry multiplies by a constant when passed mul and a constant.", () => {
  const mul5 = curry(mul, 5);
  expect(mul5(1)).toEqual(5);
  expect(mul5(5)).toEqual(25);
  expect(mul5(10)).toEqual(50);
});

