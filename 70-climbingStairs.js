// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// input n = 4
// 1. 1/1/1/1
// 2. 1/1/2
// 3. 1/2/1
// 4. 2/1/1
// 5. 2/2



var climbStairs = function(n) {
    console.log(n)
    if (n <= 1) return 1
    return climbStairs(n-1) + climbStairs(n-2)
};

console.log(climbStairs(4))
