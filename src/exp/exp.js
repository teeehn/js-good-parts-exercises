"use strict"

export function exp(arg) {
  // If arg isn't an array just echo it.
  
  if (!Array.isArray(arg)) {
    return arg;
  }

  return arg[0](exp(arg[1]), exp(arg[2]));
}

