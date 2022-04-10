function combOfArr(arr, length) {
    const combinations = [];

    if (arr === null) return null;

    if (length === 1) {
        combinations.push(...arr.map((el) => [el]));
    } else {
        for (let i = 0; i < arr.length; i++) {
            combinations.push(...combOfArr(arr.slice(i + 1), length - 1).map((array) => [arr[i], ...array]));
        }
    }

    return combinations;
}

const chooseOptimalDistance = (t, k, ls) => {
    //checks for correct input
    if(t === undefined || k === undefined || ls === undefined){
        return null;
    }
    if (Number.isInteger(t) === false || t < 0) {
        return null;
    }
    if (Number.isInteger(k) === false || k < 1) {
        return null;
    }
    if (ls.length < 1 || ls.length < k) {
        return null;
    }
    for (let i = 0; i < ls.length; i++) {
        if (Number.isInteger(ls[i]) === false || ls[i] < 0) {
            return null;
        }
    }

    let combinations = combOfArr(ls, k);
    let sums = [];
    let sum;
    for (let i = 0; i < combinations.length; i++) {
        sum = 0;

        for (let j = 0; j < k; j++) {
            sum += combinations[i][j];
        }

        sums.push(sum);
    }
    sums.sort(function (a, b) {
        return a - b;
    });

    if (sums[0] > t) return null;
    if (sums[sums.length - 1] < t) return sums[sums.length - 1];

    for (let i = 0; i < sums.length; i++) {
        if (sums[i] > t - 1) {
            return sums[i - 1];
        }
    }

    return null;
}

module.exports.chooseOptimalDistance = chooseOptimalDistance;
chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]); // null

