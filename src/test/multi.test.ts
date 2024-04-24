import { n, number, notTrue, notFalse } from "../multi";

describe("This is a unit test for Multi", () => {
  test("should be null", () => {
    expect(n).toBe(null);
  });

  test("should be 0", () => {
    expect(number).toBe(0);
  });

  test("should be false", () => {
    expect(notTrue).toBe(false);
  });

  test("should be true", () => {
    expect(notFalse).toBe(true);
  });
});
