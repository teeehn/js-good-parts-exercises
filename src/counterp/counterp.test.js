import { counterp } from "./counterp";

test("Given a starting value up and down increment the count accordingly.", () => {
  const obj = new counterp(10);

  const up = obj.up;
  const down = obj.down;

  // To get the same result as the identical test for counter
  // we need to use apply or call to get the correct context
  // for this. The use of "this" in the prototype syntax
  // really complicates how we need to reason about things.

  expect(up.apply(obj)).toBe(11);
  expect(down.apply(obj)).toBe(10);
  expect(down.apply(obj)).toBe(9);
  expect(up.apply(obj)).toBe(10);
});

