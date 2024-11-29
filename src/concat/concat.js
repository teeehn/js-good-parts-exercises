"use strict";

export function concat(gen1, gen2) {
  return function () {
    const val = gen1();
    if (val !== undefined) {
      return val;
    }
    return gen2();
  };
}

