"use strict";

export function identityf(val) {
  return function () {
    return val;
  }
}

