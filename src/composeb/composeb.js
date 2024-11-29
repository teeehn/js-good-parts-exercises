"use strict";

export function composeb(binary1, binary2) {
  return function(a, b, c) {
    return binary2(binary1(a, b), c);
  }
}

