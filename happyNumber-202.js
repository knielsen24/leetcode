/*
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.


    input: int
    output: bool

    psuedo:  for each digit get remainder 10 to find value for each digit
            take digit and square it and add it to the sum and repeat

*/
const num = 19

const isHappy = (n) => {


    while(n !== 1) {
        let numToArr = String(n).split("").map(num => Number(num))

        let findSum = numToArr.map(num => {
            let squared = 0;
            squared += num * num
            return squared
        })

        let recall = (arr) => {
            let sum = arr.reduce((total, num) => total + num)
            isHappy(sum)
        }
        recall(findSum)
    }

    return n===1
}

isHappy(num)
