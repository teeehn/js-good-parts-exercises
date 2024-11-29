"use strict";

export function counter(start) {
  return {
    up: function() {
      start += 1;
      return start;
    },
    down: function() {
      start -= 1;
      return start;
    }
  };
}

