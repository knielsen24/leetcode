var minimumRounds = function (tasks) {
    let taskCounter = {};
    for (val of tasks) {
        taskCounter[val] = (taskCounter[val] || 0) + 1;
    }

    let valueArr = Object.values(taskCounter);
    let count = 0;

    for (let i = 0; i < valueArr.length; i++) {
        if (valueArr[i] < 2) return -1;
        else if (valueArr[i] === 2 || valueArr[i] === 3) {
            count++;
        } else {
            count += Math.ceil(valueArr[i] / 3);
        }
    }

    return count;
};

const taskListOne = [2, 2, 3, 3, 2, 4, 4, 4, 4, 4, 4, 4];
console.log(minimumRounds(taskListOne));

// else if (valueArr[i] % 3 === 0) {
//     count += valueArr[i]/3
// }
