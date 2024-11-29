"use strict";

export function reverse(binary) {
  return function(first, second) {
    return binary(second, first);
  }
}

