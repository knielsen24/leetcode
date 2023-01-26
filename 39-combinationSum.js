const selfCombination = (candidate, currentTarget, previousCandidates) => {
    if(previousCandidates.length > 0){
        for (let i = 0; i < previousCandidates.length + 1; i++){

        }
        if (currentTarget + previousCandidates[i]){
            
        }
    }


    if (currentTarget % candidate === 0) {
        let x = currentTarget / candidate;
        let combination = [];
        for (let i = 0; i < x; i++) {
            combination.push(candidate);
        }
        return combination;
    } else return null;
};

var combinationSum = function (candidates, target) {
    let arr = [];
    let combination = [];

    for (let i = 0; i < candidates.length; i++) {
        let currentTarget;
        let previousCandidates = candidates.slice(0, i);
        if (i !== 0) {
            currentTarget = target - previousCandidates;
        } else {
            currentTarget = target;
        }

        console.log(currentTarget);

        if (
            selfCombination(
                candidates[i],
                currentTarget,
                previousCandidates
            ) !== null
        ) {
            console.log(i);
            arr.push(selfCombination(candidates[i], currentTarget, previousCandidates));
        }

        // if (candidates[i] === target){
        //     arr.push([target])
        // }
    }

    // console.log(selfCombination(9, 2));

    return arr;
};

const candidates = [2, 3, 6, 7];
const target = 7;

const candidates2 = [2, 3, 5];
const target2 = 8;

console.log(combinationSum(candidates2, target2));
