function findOutlier(integers) {
    let binary = integers.map(function (int, i) {
        return Math.abs(int) % 2;
    });
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == 0)
            count++;
    }
    if (count > 1) {
        return integers[binary.indexOf(1)]
    } else {
        return integers[binary.indexOf(0)]
    }
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
console.log(findOutlier([2, 4, 0, 100, 4, -11, 2602, 36]))
console.log(findOutlier([7, 3, 1, 101, 4, 11, 2603, 35]))