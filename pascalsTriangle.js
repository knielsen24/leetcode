/*
    Input: numRows = 5
    Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]


    psuedo: create loop to add numbers half wa
        create length and through each iteration increase the length of each array
*/

var generate = function (numRows) {
    let mainArr = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(mainArr[i - 1][j - 1] + mainArr[i - 1][j]);
            }
        }
        mainArr.push(row);
    }
    return mainArr;
};

/**
 * ****First Draft
 *var generate = function (numRows) {
    let mainArr = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(mainArr[i - 1][j - 1] + mainArr[i - 1][j]);
            }
        }
        mainArr.push(row);
    }
    return mainArr;
};
 *
 *
 *
 */

console.log(generate(5));


/**
 * ****Refactor 1 using ternary
 *var generate = function (numRows) {
    let mainArr = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j < i + 1; j++) {
            j === 0 || j === i
                ? row.push(1)
                : row.push(mainArr[i - 1][j - 1] + mainArr[i - 1][j]);
        }
        mainArr.push(row);
    }
    return mainArr;
};
 */


