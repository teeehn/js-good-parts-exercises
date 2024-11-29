import { countercl } from "./countercl";

test("Given a starting value up and down increment the count accordingly.", () => {
  const obj = new countercl(10);
  const up = obj.up;
  const down = obj.down;

  expect(up.call(obj)).toBe(11);
  expect(down.call(obj)).toBe(10);
  expect(down.call(obj)).toBe(9);
  expect(up.call(obj)).toBe(10);
});

