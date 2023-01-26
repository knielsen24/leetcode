var sortColors = function (nums) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    let noSwaps = true
    for (let i = nums.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
                noSwaps = false
            }
        }
        if (noSwaps) break
    }
    return nums;
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(sortColors(nums));
