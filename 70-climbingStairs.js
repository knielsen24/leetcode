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

// input n = 5
// 1. 1/1/1/1/1
// 2. 1/1/1/2
// 3. 1/1/2/1
// 4. 1/2/1/1
// 5. 2/1/1/1
// 6. 2/2/1
// 7. 2/1/2
// 8. 1/2/2

// input n = 6
// 1. 1/1/1/1/1/1
// 2. 1/1/1/1/2
// 3. 1/1/1/2/1
// 4. 1/1/2/1/1
// 5. 1/2/1/1/1
// 6. 2/1/1/1/1
// 7. 1/1/2/2
// 8. 2/2/1/1
// 9. 2/1/1/2
//10. 1/2/2/1
//11. 2/1/2/1
//13. 1/2/1/2
//14. 2/2/2

var climbStairs = function(n) {
    let one = n/n
    let two = n-1
    let three = n-2
};