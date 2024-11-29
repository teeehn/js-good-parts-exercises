import { revocable } from "./revocable";
import { add } from "../add/add";

test("revocable allows the binary to be invoked  until it is revoked.", () => {
  const rev = revocable(add);
  const rev_add = rev.invoke;

  expect(rev_add(2,3)).toBe(5);
  expect(rev_add(3, 4)).toBe(7);

  rev.revoke();
  expect(rev_add(2,2)).toBe(undefined);
});

