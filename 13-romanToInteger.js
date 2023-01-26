var romanToInt = function(s) {

    let total = 0
    const lib = {
        "I" : 1,
        "IV": 4,
        "V" : 5,
        "IX" : 9,
        "X" : 10,
        "XL" : 40,
        "L" : 50,
        "XC" : 90,
        "C" : 100,
        "CD" : 400,
        "D" : 500,
        "CM" : 900,
        "M" : 1000
    }

    for (let i = s.length -1; i >= 0; i--){
        if (lib[s[i-1]+s[i]]) {
            total += lib[s[i-1]+s[i]]
            i--
        } else {
            total += lib[s[i]]
        }
    }

    return total
};

const s1 = "III"
const s2 = "LVIII"
const s3 = "MCMXCIV"


console.log(romanToInt(s2))
