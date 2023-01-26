/*
    Input: strs = ["flower","flow","flight"]
    Output: "fl"
*/


const longestCommonPrefix = (strs) => {

    let pre = ""

    const len = strs.sort((a, b) => a.length - b.length)[0].length
    const cut = strs.map((word) => word.slice(0, len))
    const transpose = cut[0].split("").map((_, i) => cut.map(row => row[i]));

    for (word of transpose ) {
        let uniqueChars = [...new Set(word)]

        if (uniqueChars.length === 1) {
            pre += uniqueChars[0]
        } else break
    }
    return pre
}

const strs = ["flower","flow","floiwht"]

console.log(longestCommonPrefix(strs))


// const longestCommonPrefix = (strs) => {

//     let pre = ""

//     const len = strs.sort((a, b) => a.length - b.length)[0].length
//     const cut = strs.map((word) => word.slice(0, len))
//     const transpose = cut[0].split("").map((_, i) => cut.map(row => row[i]));

//     for (word of transpose ) {
//         const uniqueChars = word.filter((x, i, a) => a.indexOf(x) === i)

//         if (uniqueChars.length === 1) {
//             pre += uniqueChars[0]
//         } else break
//     }

//     return pre

// }
