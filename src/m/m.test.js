import { m } from "./m";

test("m produces a JSON object representing a string and a source.", () => {
  expect(m(1)).toEqual({value:1, source:"1"});
  expect(m(Math.PI, "pi")).toEqual({value:3.141592653589793,source:"pi"});
});

