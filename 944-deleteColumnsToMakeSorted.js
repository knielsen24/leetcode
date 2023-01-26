var minDeletionSize = function(strs) {

    let newArray = []
    let newStr = ""
    let str = 0
    let char = 0
    let deleteCol = 0

    while (str < strs.length && char < strs[0].length) {
        if(char < strs[0].length){
            newStr += strs[str][char]
            str++
            if(str === strs.length) {
                newArray.push(newStr)
                newStr = ""
                str = 0
                char++
            }
        }
    }

    newArray.map(str => {
        let sorted = str.split("").sort().join("")
        if(str !== sorted) {
            deleteCol++
        }
    })

    return deleteCol

};


console.log(minDeletionSize(["abc", "bcd", "cde"]))
