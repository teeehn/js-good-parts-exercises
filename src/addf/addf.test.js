import { addf } from "./addf";

test("addf uses 2 invocations to add.", () => {
  expect(addf(3)(4)).toEqual(7);
});

