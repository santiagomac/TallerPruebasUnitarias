import { sum } from "../sum";

describe("Test one function that sum two numbers", () => {
  test("Should be 5 the return of the sum function", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
