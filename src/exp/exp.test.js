"use strict"
import { exp } from "./exp";
import { add } from "../add/add";
import { square } from "../square/square";

test("exp evaluates an sae, nae or returns a non-sea argument", () => {
 const sea = [add, 2, 3];
 expect(exp(sea)).toBe(5);
 expect(exp(5)).toBe(5);

 const nae = [
   Math.sqrt,
   [
     add,
     [square, 3],
     [square, 4]
   ]
 ];
 expect(exp(nae)).toBe(5);
});

