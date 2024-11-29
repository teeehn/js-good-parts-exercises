import { identityf } from "./identityf";

test("identityf returns a function which returns the value passed.", () => {
  expect(identityf(2)()).toBe(2);
  expect(identityf("hello")()).toBe("hello");
});


