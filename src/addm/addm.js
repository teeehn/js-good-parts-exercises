"use strict";
import { m } from "../m/m";

export function addm(m1, m2) {
  return m(
    m1.value + m2.value,
    `(${m1.source}+${m2.source})` 
  );
}
