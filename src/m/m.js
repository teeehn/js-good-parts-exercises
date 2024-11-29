"use strict";

export function m(value, source) {
  return {
    value,
    source: (typeof source === "string")
      ? source
      : String(value)
  };
}

