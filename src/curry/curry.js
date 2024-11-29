"use strict";
import { liftf } from "../liftf/liftf";

export function curry(binary, num) {
  const lifted = liftf(binary);
  return lifted(num);
}

