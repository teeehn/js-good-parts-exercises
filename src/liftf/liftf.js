"use strict";

export function liftf(binary) {
  return function (first) {
    return function (second) {
      return binary(first, second);
    }
  }
}

