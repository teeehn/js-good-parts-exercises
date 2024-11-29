"use strict";

export function mul(first, second) {
  if (typeof second === "undefined") {
    return first;
  }
  return first * second;
}

