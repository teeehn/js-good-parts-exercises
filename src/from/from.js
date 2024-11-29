"use strict";

export function from(init) {
  let inc = init;
  return function() {
    const val = inc;
    inc += 1;
    return val;
  }
}

