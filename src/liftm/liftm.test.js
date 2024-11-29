import { liftm } from "./liftm";
import { add } from "../add/add";
import { mul } from "../mul/mul";
import { m } from "../m/m";

test("liftm takes a binary and a string and returns a function that creates an m object using them.", () => {
  // add
  const addm = liftm(add, "+");
  expect(typeof addm).toBe("function");
  expect(addm(m(3), m(4))).toEqual({value: 7, source: "(3+4)"}); 
  expect(addm(3, 4)).toEqual({value: 7, source: "(3+4)"}); 
  expect(addm(3, m(4))).toEqual({value: 7, source: "(3+4)"}); 

  // mul
  const mulm = liftm(mul, "*");
  expect(typeof mulm).toBe("function");
  expect(mulm(m(3),m(4))).toEqual({value: 12, source: "(3*4)"});
  expect(mulm(3,4)).toEqual({value: 12, source: "(3*4)"});
  expect(mulm(3,m(4))).toEqual({value: 12, source: "(3*4)"});
});

