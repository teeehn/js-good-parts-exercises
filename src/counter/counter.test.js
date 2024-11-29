import { counter } from "./counter";

test("Given a starting value up and down increment the count accordingly.", () => {
  const obj = counter(10);
  const up = obj.up;
  const down = obj.down;

  expect(up()).toBe(11);
  expect(down()).toBe(10);
  expect(down()).toBe(9);
  expect(up()).toBe(10);
});

