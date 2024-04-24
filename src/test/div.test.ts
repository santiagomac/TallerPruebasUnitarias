import { div } from "../div";

describe("Test div", () => {
    test("Should return 2 when div 10/5", () => {
        expect(div(10, 5)).toBe(2)
    })

    test("Shoul return Infinity when can not div", () => {
        expect(div(10, 0)).toBe(Infinity)
    })
})