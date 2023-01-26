/*
    Input: digits = [1,2,3]
    Output: [1,2,4]
 */

const digits = [1,9,9]

var plusOne = function(digits) {

    for(let i = digits.length - 1; i >-1 ; i--){

        if(digits[i] + 1 < 10){
            digits[i] = digits[i] + 1
            return digits
        } else if (digits[i] + 1 === 10){
            digits[i] = 0
            if(digits[0] === 0){
                digits.unshift(1)
            }
        }
    }

    return digits
};


console.log(plusOne(digits))
