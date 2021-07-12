function addBinary(a, b) {
    let sum = parseInt(a, 2) + parseInt(b, 2);
    return String(sum.toString(2));
}