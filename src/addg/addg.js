"use strict"

export function addg(arg0) {
  if (typeof arg0 === "undefined") {
    return;
  }
  return function(arg) {
   return typeof arg !== "undefined" ? addg(arg + arg0): arg0;
  }
}

