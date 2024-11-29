import { collect } from "./collect";
import { fromTo } from "../fromTo/fromTo";

test("collect takes the results from the generator and stores them in the designated array.", () => {
  const arr = [];
  const gen = fromTo(1, 3);

  const col =  collect(gen, arr);

  expect(col()).toBe(1);
  expect(arr).toEqual([1]);

  expect(col()).toBe(2);
  expect(arr).toEqual([1, 2]);

  expect(col()).toEqual(undefined);
  expect(arr).toEqual([1, 2]);
});

