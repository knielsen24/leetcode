
// Input: low = 3, high = 7
// Output: 3
// Explanation: The odd numbers between 3 and 7 are [3,5,7].

var countOdds = function(low, high) {

    let count = 0

    for (let i = low; i < high + 1; i++) {
        if(i % 2 !== 0){
            count++
        }
    }

    return count

};


console.log(countOdds(8, 10))
