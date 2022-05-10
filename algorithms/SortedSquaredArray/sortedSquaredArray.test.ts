import {sortedSquaredArray} from "./sortedSquaredArray";

test('Sorted Squared Array', () => {
    let nums = [-5, -2, -1, 2, 3, 4]
    let exp = [1, 4, 4, 9, 16, 25]

    expect(sortedSquaredArray(nums)).toEqual(exp)

    nums = [-5, -3, 2, 3, 10]
    exp = [4, 9, 9, 25, 100]

    expect(sortedSquaredArray(nums)).toEqual(exp)

    nums = [1, 2, 3, 4, 5]
    exp = [1, 4, 9, 16, 25]

    expect(sortedSquaredArray(nums)).toEqual(exp)

    nums = [-1, -2, -3, -4, -5]
    exp = [1, 4, 9, 16, 25]

    expect(sortedSquaredArray(nums)).toEqual(exp)
})