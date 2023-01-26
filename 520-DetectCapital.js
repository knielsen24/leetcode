// Input: word = "USA"
// Output: true

var detectCapitalUse = function(word) {

  return (word === word.toUpperCase() || word.slice(1) === word.slice(1).toLowerCase())
};

console.log(detectCapitalUse("KEn"))


// let max = word.length -1

// if(word[max] === word[max].toUpperCase()) {
//     for (char of word) {
//         if (char !== char.toUpperCase()) return false
//     }
// } else {
//     for (let i = max -1; i > -1; i--) {
//         if(i !== 0 && word[i] !== word[i].toLowerCase()) return false
//     }
// }
// return true
