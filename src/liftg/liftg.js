"use strict"

export function liftg(binary) {
 return function next(arg0) {
  if (typeof arg0 === "undefined") {
    return;
  }
  return function(arg) {
    return typeof arg !== "undefined" ? next(binary(arg0, arg)): binary(arg0);  
  } 
 }
}

