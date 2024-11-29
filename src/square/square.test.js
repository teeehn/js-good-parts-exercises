"use strict"

import { square } from "./square";

test("square returns the square of a number or the argument.", () => {
  expect(square(2)).toBe(4);
  expect(square(3)).toBe(9);
  expect(square("foo")).toBe("foo");
});

