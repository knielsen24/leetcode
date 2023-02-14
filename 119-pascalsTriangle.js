var getRow = function (rowIndex) {
    let arr = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        let row = [];

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i ) {
                row.push(1);
            } else {
                row.push(arr[i - 1][j - 1] + arr[i-1][j])
            }
        }
        if(i === rowIndex) return row
        arr.push(row);
    }
};

console.log(getRow(4));

// [1]
// [1,1]
// [1,2,1]
// [1,3,3,1]
