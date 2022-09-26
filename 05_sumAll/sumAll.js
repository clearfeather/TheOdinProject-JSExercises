const sumAll = function (num1, num2) {
    let total = 0;
    if (Number.isInteger(num1) && num1 > 0 && Number.isInteger(num2) && num2 > 0 && num1 < num2) {
        for (let i = num1; i < num2 + 1; i++) {
            total += i;
        } return total;

    } else if (num1 > num2) {
        //do it backwards
        for (let i = num2; i < num1 + 1; i++) {
            total += i;
        } return total;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
