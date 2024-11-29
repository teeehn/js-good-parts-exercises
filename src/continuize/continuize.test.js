"use strict"

import { continuize } from "./continuize";

test("continuize returns the output of the unary function.", () => {
  const fn = jest.fn();
  const sqrtc = continuize(Math.sqrt);
  sqrtc(fn, 81);
  expect(fn).toHaveBeenCalledWith(9);
});

