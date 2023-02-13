var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    // length of arr must be 3 or more

    let mountain = true;
    // mountain will be the return if conditions down below do not return false
    let peak = arr.indexOf(Math.max(...arr));
    // finding the peak (max) of the arry

    if (peak === 0 || peak === arr.length - 1) return false;
    // returns false if the peak is at index 0 or last index

    let left = peak - 1;
    let right = peak;
    // this assigns left and right some where in "middle" of the array
    // right and left should be stricly decreasing from the peak

    while (left > 0) {
        // looking at the peak to index 0
        if (arr[left - 1] >= arr[left]) return false;
        // returns false if not decreasing in value
        left--;
        // if the condition above is not triggered left moves towards index 0
    }

    while (right < arr.length) {
        // looking at the peak to last index
        if (arr[right] <= arr[right + 1]) return false;
        // returns false if not decreasing in value
        right++;
        // if the condition above is not triggered right moves towards last index
    }

    return mountain;
};

console.log(validMountainArray([1, 2, 3, 1]));
