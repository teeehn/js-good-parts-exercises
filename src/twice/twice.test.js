import { twice } from "./twice";
import { add } from "../add/add";
import { mul } from "../mul/mul";

test("twice creates a double function from add.", () => {
  const doubl = twice(add);
  
  expect(doubl(2)).toEqual(4);
  expect(doubl(5)).toEqual(10);
  expect(doubl(10)).toEqual(20);
});

test("twice creates a square function from mul.", () => {
  const square = twice(mul);
  expect(square(2)).toEqual(4);
  expect(square(5)).toEqual(25);
  expect(square(10)).toEqual(100);
});

