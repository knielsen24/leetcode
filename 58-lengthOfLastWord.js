var lengthOfLastWord = function(s) {
    const splitArr = s.split(" ").filter(elm => {
        return elm.length > 0
    })

    return splitArr[splitArr.length -1].length
};

const phrase = "   fly me   to   the moon  "
console.log(lengthOfLastWord(phrase))
