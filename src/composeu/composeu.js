"use strict";

export function composeu(unary1, unary2) {
  return function (num) {
    return unary2(unary1(num));
  }
}

