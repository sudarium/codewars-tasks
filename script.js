function squareDigits(num) {
    let numToString = String(num);
    let result = [];

    for (let i = 0; i < numToString.length; i++) {
        result[i] = numToString[i] * numToString[i];
    }

    return  Number(result.join(''));

}
