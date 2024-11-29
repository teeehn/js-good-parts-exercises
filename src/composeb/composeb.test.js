import { composeb } from "./composeb";
import { add } from "../add/add";
import { mul } from "../mul/mul";

test("composeb will compose 2 binary functions.", () => {
  expect(composeb(add, mul)(2, 3, 7)).toEqual(35);
});

