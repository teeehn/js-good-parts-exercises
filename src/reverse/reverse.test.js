import { reverse } from "./reverse";
import { sub } from "../sub/sub";

test("reverse makes subtraction go in reverse order.", () => {
  const bus = reverse(sub);
  expect(bus(3, 2)).toEqual(-1);
});

