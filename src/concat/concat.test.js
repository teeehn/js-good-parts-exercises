import { concat } from "./concat";
import { fromTo } from "../fromto/fromTo";

test("concat produces values by running the generators in sequence.", () => {
  const con = concat(fromTo(0, 3), fromTo(0,2));
  expect(con()).toBe(0);
  expect(con()).toBe(1);
  expect(con()).toBe(2);
  expect(con()).toBe(0);
  expect(con()).toBe(1);
  expect(con()).toBe(undefined);
});

