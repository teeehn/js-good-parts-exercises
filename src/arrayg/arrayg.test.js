"use strict"

import { arrayg } from "./arrayg";


test("arrayg recursively creates an array.", () => {
  expect(arrayg()).toStrictEqual([]);
  expect(arrayg(3)()).toStrictEqual([3]);
  expect(arrayg(3)(4)(5)()).toStrictEqual([3, 4, 5]);
});

