"use strict";

export function filter(generator, predicate) {
  return function filteredGen() {
      let val = generator();
      if (
          predicate(val) ||
          val === undefined
      ) {
        return val;
      }
      return filteredGen();
  };
}

