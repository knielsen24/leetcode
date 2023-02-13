var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    let mountain = true;
    let peak = arr.indexOf(Math.max(...arr));

    if(peak === 0 || peak === arr.length -1) return false

    let left = peak - 1;
    let right = peak;

    while (left > 0) {
        if(arr[left -1] >= arr[left]) return false

        left--;
    }

    while (right < arr.length) {
        if(arr[right] <= arr[right+1]) return false
        right++;
    }

    return mountain
};

console.log(validMountainArray([1, 2, 1]));


