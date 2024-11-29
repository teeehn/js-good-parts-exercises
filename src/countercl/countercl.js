"use strict";

// This is an implmentation of counter and counterp
// using the class syntax.
// This syntax is more clear than prototype, but it
// suffers from the same defects in that "this"
// requires the use of call or apply if
// we get a reference to the methods and do not
// use the obj.method syntax to invoke.
// Also we need to use the new keyword to obtain
// an instance.

export class countercl {
  constructor(start) {
    this.count = start;
  }

  up() {
    return this.count += 1;
  }

  down() {
    return this.count -= 1;
  }
}

