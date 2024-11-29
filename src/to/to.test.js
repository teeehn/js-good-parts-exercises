import { to } from "./to";
import { from } from "../from/from";

test("to returns a function that places an upper limit on a generator created with from.", () => {
  const index = to(from(1), 3);
  expect(index()).toEqual(1);
  expect(index()).toEqual(2);
  expect(index()).toBe(undefined);
});

