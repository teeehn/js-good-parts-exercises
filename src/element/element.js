"use strict";
import { fromTo } from "../fromTo/fromTo";

export function element(arr, gen) {
  if ( gen === undefined ) {
    gen = fromTo(
      0,
      arr.length
    ); 
  }

  return function() {
    let next = gen();
    if ( next !== undefined ) {
      return arr[next]
    }
  }
}

