"use strict";
import { from } from "../from/from";

export function gensymf(init) {
  const gen = from(1);
  return function () {
   return init + gen();
  };
}

