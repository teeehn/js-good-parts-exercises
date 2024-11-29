import { from } from "./from";

test("from returns a generator that starts with the initial value passed.", () => {
  const gen = from(2);
  expect(gen()).toEqual(2);
  expect(gen()).toEqual(3);
  expect(gen()).toEqual(4);
});

