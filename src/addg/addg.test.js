"use strict"

import { addg } from "./addg";

test("addg recursively adds.", () => {
  expect(addg()).toBe(undefined);
  expect(addg(1)()).toBe(1);
  expect(addg(1)(2)()).toBe(3);
  expect(addg(1)(0)(3)()).toBe(4);
});
