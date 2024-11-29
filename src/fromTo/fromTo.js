"use strict";
import { from } from "../from/from";
import { to } from "../to/to";

export function fromTo(start, end) {
  return to (
    from(start),
    end
  );
}

