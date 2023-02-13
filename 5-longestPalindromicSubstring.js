// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.

var longestPalindrome = function (s) {

    let longest = ""

    const isPalindrome = (str) => {
        return str === str.split().reverse().join()
    }

    

    for(let i = 0; i < s.length -1; i++){
        for(let j = 0; j < s.length-1; j++){

        }
    }

};

const s = "cabac";
console.log(longestPalindrome(s));


// var longestPalindrome = function (s) {
//     let longest = "";

//     let front = [];
//     let back = [];

//     for (let i = 0; i < s.length / 2; i++) {
//         if (s[i] === s[s.length - 1 - i]) {
//             front.push(s[i]);
//             back.push(s[i]);
//         } else {

//         }

//     }
//     console.log(front.join("") + back.reverse().join(""));


//     return longest;
// };

// const s = "cabac";
// console.log(longestPalindrome(s));
