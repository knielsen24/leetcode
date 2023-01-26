/**
 *
 * {Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
 * In this case, the max area of water (blue section) the container can contain is 49.} height
 */

var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxContainer = 0;

    // const container = (num1, num2, arr) => {
    //     return Math.min(arr[num1], arr[num2]) * (num2 - num1);
    // };

    while (left !== right) {
        let temp = Math.min(height[left], height[right]) * (right - left)
        // let temp = container(left, right, height);
        if (temp > maxContainer) {
            maxContainer = temp;
        }
        height[left] < height[right] ? left++ : right--;
    }
    return maxContainer;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(height));
