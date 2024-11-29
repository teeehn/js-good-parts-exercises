"use strict"

export function arrayg(arg0) {
  const arr = [];
  if (typeof arg0 === "undefined") {
    return arr;
  }
  arr.push(arg0);
  return function next(arg) {
    if (typeof arg !== "undefined") {
      arr.push(arg);
      return next;
    }
    return arr;   
 } 
}

