import { fibonaccif } from "./fibonaccif";

test("fibonaccif returns a function which produces a series of fibonacci numbers.", () => {
  const fib = fibonaccif(0,1);
  expect(fib()).toBe(0);
  expect(fib()).toBe(1);
  expect(fib()).toBe(1);
  expect(fib()).toBe(2);
  expect(fib()).toBe(3);
  expect(fib()).toBe(5);
  expect(fib()).toBe(8);
  expect(fib()).toBe(13);
});

