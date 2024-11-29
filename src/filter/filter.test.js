import { filter } from "./filter";
import { third } from "../third/third";
import { fromTo } from "../fromTo/fromTo";

test("filter returns a function which generates only values which are filtered by the predicate.", () => {
  const gen = filter(fromTo(0, 5), third);
  expect(gen()).toBe(0);
  expect(gen()).toBe(3);
  expect(gen()).toBe(undefined);
});

