"use strict"

import { liftg } from "./liftg";
import { mul } from "../mul/mul";

test("liftg recursively runs a binary function.", () => {
  expect(liftg(mul)()).toBe(undefined);
  expect(liftg(mul)(1)()).toBe(1);
  expect(liftg(mul)(2)(3)()).toBe(6);
  expect(liftg(mul)(4)(0)(5)()).toBe(0);
  expect(liftg(mul)(1)(2)(3)(4)()).toBe(24);
});

