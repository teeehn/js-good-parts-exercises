import { liftf } from "./liftf";
import { add } from "../add/add";
import { mul } from "../mul/mul";

test("liftf makes add work with 2 invocations", () => {
  const addf = liftf(add);
  expect(addf(3)(4)).toEqual(7);
});

test("liftf makes mul work with 2 invocations.", () => {
  const mulf = liftf(mul);
  expect(mulf(2)(3)).toEqual(6);
  expect(mulf(10)(2)).toEqual(20);
});

