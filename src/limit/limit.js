"use strict";

export function limit(binary, max) {
  let calls = 0;
  return function(a, b) {
    if ( calls < max ) {
      calls += 1;
      return binary(a, b);
    }
  }
}

