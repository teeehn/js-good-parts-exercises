import { element } from "./element";
import { fromTo } from "../fromTo/fromTo";

test("Given an array and fromTo generator, element returns array elements from within the specified range.", () => {
  const elem = element(["a", "b", "c", "d"], fromTo(1, 3));

  expect(elem()).toBe("b");
  expect(elem()).toBe("c");
  expect(elem()).toBe(undefined);
});

test("if generator function is not provided all the elements in the array are returned, then undefined.", () => {
  const elem = element(["a", "b", "c", "d"]);

  expect(elem()).toBe("a");
  expect(elem()).toBe("b");
  expect(elem()).toBe("c");
  expect(elem()).toBe("d");
  expect(elem()).toBe(undefined);
});

