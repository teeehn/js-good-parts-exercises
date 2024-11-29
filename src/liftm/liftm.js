"use strict";

import { m } from "../m/m";

export function liftm(binary, op) {
  return function(a, b) {
    if ( typeof a === "number") {
      a = m(a);
    }
    if ( typeof b === "number") {
      b = m(b);
    }
    return m(
      binary(
        a.value, 
        b.value
      ),
      (
        "(" + 
        a.source + 
        op + 
        b.source + 
        ")"
      )
    );
  };
}

