import { anything, anything1 } from "../string";

describe("This is unit test to string from de string file", () => {
  test("should be equal with the string", () => {
    expect(anything).toEqual("UNAC");
  });

  test("should be equal with the string", () => {
    expect(anything1).toEqual("UnAc");
  });
});
