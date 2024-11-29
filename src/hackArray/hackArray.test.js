"use strict"

import { hackArray } from "./hackArray";

test("Test hack array methods work.", () => {
  const harr = hackArray();
  harr.insert(0,"foo");
  harr.append("bar");

  // Try to hack it.

  function hackIt() {
   console.log(this);
  }
  
  harr.insert("push", hackIt); 
  expect(harr.read(0)).toBe("foo");
  expect(harr.read(1)).toBe("bar");
  harr.append("hacked");
});

