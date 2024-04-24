import { arrayContainsValue, arrayNotContainsValue } from "../array";

describe('Test Array', () => {
    test('Should return true if array constains the value', () => {
        const arr = [1,2,3,4]
        expect(arrayContainsValue(arr, 1)).toBe(true)
    })

    test("Should return true if array not contains the value", () => {
        const arr = [1,2,3,4]
        expect(arrayNotContainsValue(arr, 5)).toBe(true)
    })
})