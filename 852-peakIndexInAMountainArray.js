/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    const originalLen = arr.length;
    let left = 0;
    let right = originalLen - 1;
    let mid = Math.floor((left + right) / 2);

    while (left < mid && mid < originalLen) {
        if (arr[mid - 1] < arr[mid] && arr[mid] < arr[mid + 1]) {
            left = mid;
        } else if (arr[mid - 1] > arr[mid] && arr[mid] > arr[mid + 1]) {
            right = mid;
        } else if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
            return mid;

        mid = Math.floor((left + right) / 2);
    }
};

const arr1 = [0, 10, 5, 2];
const arr2 = [0, 10, 15, 20, 14];

console.log(peakIndexInMountainArray(arr2));
