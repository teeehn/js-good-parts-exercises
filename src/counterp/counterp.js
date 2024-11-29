"use strict";

// This is a re-write of counter using the old object prototype
//   syntax. The use of "this" really complicates things.
//   See how the tests will differ when I try to reference the
//   up and down methods - you get a reference to the methods but
//   you need to invoke with call or  apply to get the correct context for this.

export function counterp(start) {
  this.count = start;
}

counterp.prototype.up = function() {
  return this.count += 1;
}

counterp.prototype.down = function() {
  return this.count -= 1;
}

