"use strict";

export function addf(first) {
  return function (second) {
    return  first + second;
  }
}

