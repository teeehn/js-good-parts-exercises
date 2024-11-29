import { gensymf } from "./gensymf";


test("gensymf returns a function which creates unique symbols based on an initiator string.", () => {
  const genG = gensymf("G");
  const genH = gensymf("H");

  expect(genG()).toBe("G1");
  expect(genH()).toBe("H1");
  expect(genG()).toBe("G2");
  expect(genH()).toBe("H2");
});


