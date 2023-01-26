/*
    Input: pattern = "abba", s = "dog cat cat dog"
    Output: true
*/


const pattern = "abbac"
const s = "dog cat cat dog fish"

const wordPattern = (pattern, s) => {
    let splitArr = s.split(" ")

    if(pattern.length !== splitArr.length) return false

    let library = {}

    let i = 0
    for (let char of pattern) {
        if (library[char]) {
            if(splitArr[i] !== library[char]) return false
        } else {
            if(!Object.values(library).includes(splitArr[i])){
                library[char] = splitArr[i]
            } else return false
        }
        i++
    }
    return true
}

console.log(wordPattern(pattern, s))
// wordPattern(pattern, s)
