"use strict";

export function twice(binary) {
  return function(num) {
    return binary(num, num);
  }
}

