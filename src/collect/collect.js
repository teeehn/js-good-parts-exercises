"use strict";

export function collect(gen, arr) {
  return function() {
    const val = gen();
    if (val !== undefined) {
      arr.push(val);
    }
    return val;
  };
}

