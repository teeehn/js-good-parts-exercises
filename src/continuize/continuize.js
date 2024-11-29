"use strict"

export function continuize(func) {
  return function(func2, arg) {
    const result = func(arg);
    func2(result);
  }
}

