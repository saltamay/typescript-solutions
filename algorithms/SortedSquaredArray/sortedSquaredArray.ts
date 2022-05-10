/**
 * Sorted Squared Array
 *
 * Given an integer array nums sorted in non-decreasing order, return an array of the squares
 * of each number sorted in non-decreasing order.
 *
 * Input: [-5, -2, -1, 2, 3, 4]
 * Output: [1, 4, 4, 9, 16, 25]
 *
 * Input: nums = [-5,-3,2,3,10]
 * Output: [4,9,9,25,100]
 *
 * Constraint: Time complexity of the solution should be O(n)
 *
 * @param nums
 * @returns {*[]}
 */
export const sortedSquaredArray = (nums: number[]): number[] => {
    const results: number[] = []
    let l = 0
    let r = nums.length - 1

    for (let i = nums.length - 1; i >= 0; i--) {
        const left = Math.pow(nums[l], 2)
        const right = Math.pow(nums[r], 2)
        if (left > right) {
            results[i] = left
            l++
        } else {
            results[i] = right
            r--
        }
    }

    return results
}