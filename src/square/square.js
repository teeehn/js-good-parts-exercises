"use strict"

export function square(num){
  if (typeof num !== "number") {
    return num;
  }
  return num*num;
}

