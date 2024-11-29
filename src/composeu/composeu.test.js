import { composeu } from "./composeu";
import { twice } from "../twice/twice";
import { add } from "../add/add";
import { mul } from "../mul/mul";

const doubl = twice(add);
const square = twice(mul);

test("composeu will produce a function that will double and then square a number when passed doubl and square.", () => {
  expect(composeu(doubl, square)(5)).toEqual(100);
});

