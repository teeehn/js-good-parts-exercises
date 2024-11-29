import { fromTo } from "./fromTo";

test("fromTo generates values within the range specified.", () => {
  const gen = fromTo(1, 3);

  expect(gen()).toEqual(1);
  expect(gen()).toEqual(2);
  expect(gen()).toBe(undefined);
});

