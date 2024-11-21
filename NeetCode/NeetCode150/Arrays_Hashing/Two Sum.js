/**
 * Two Sum Solutions
 * ==================
 * Problem: Find indices of two numbers in an array that add up to a target.
 */

/**
 * Solution 1: Brute Force
 * Time Complexity: O(n^2) - Two nested loops to check each pair.
 * Space Complexity: O(1) - No additional space used.
 */
function twoSumBruteForce(nums, target) {
    let n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

/**
 * Solution 2: Two Pointers (Requires Sorted Input)
 * Time Complexity: O(n log n) - Sorting the array dominates the time complexity.
 * Space Complexity: O(n) - Additional space for storing original indices.
 */
function twoSumTwoPointers(nums, target) {
    const indexedNums = nums.map((num, index) => [num, index]);
    indexedNums.sort((a, b) => a[0] - b[0]); // Sort by values

    let left = 0, right = nums.length - 1;
    while (left < right) {
        const sum = indexedNums[left][0] + indexedNums[right][0];
        if (sum === target) {
            return [indexedNums[left][1], indexedNums[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

/**
 * Solution 3: Using a Hash Map
 * Time Complexity: O(n) - Single pass to traverse the array.
 * Space Complexity: O(n) - Hash map to store array elements.
 */
function twoSumHashMap(nums, target) {
    const lookUp = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (lookUp.hasOwnProperty(complement)) {
            return [lookUp[complement], i];
        }
        lookUp[nums[i]] = i;
    }
    return [];
}



/**
 * Test Cases
 */
const nums = [2, 7, 11, 15];
const target = 9;

console.log("Brute Force:", twoSumBruteForce(nums, target)); // Output: [0, 1]
console.log("Two Pointers:", twoSumTwoPointers(nums, target)); // Output: [0, 1]
console.log("Hash Map:", twoSumHashMap(nums, target)); // Output: [0, 1]
