"use strict";

export function to(gen, max) {
  return function() {
    const val = gen();
    if ( val < max ) {
      return val;
    }
  }
}
