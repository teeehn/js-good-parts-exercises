"use strict";
import { from } from "../from/from";

export function fibonaccif(f0, f1) {
  const arrf = [f0, f1];
  gen = from(0);
  return function() {
    const index = gen();
    if (index < 2) {
      return arrf[index];
    }
    const fib = arrf[index - 1] + arrf[index - 2];
    arrf[index] = fib;
    return fib;
  };
}

