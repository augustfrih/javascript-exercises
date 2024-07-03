const sumAll = function(x, y) {
    let sum = 0;

    if (x < 0 || y < 0 || typeof(x) != typeof(1) || typeof(y) != typeof(1)) {
        return "ERROR"
    }

    for (i = x; i <= y; i++) {
        sum = sum + i;
    }

    for (i = y; i <= x; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
