import { addm } from "./addm";
import { m } from "../m/m";

test("addm takes 2 m objects and combines them.", () => {
  expect(addm(m(1), m(2))).toEqual({value: 3, source: "(1+2)"});
  expect(addm(m(1), m(Math.PI, "pi"))).toEqual({value: 4.141592653589793, source: "(1+pi)"});  
});
