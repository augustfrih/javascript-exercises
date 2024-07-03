const removeFromArray = function() {

    let length = arguments[0].length;
    let argNum = arguments.length;

    for (y = 1; y < argNum; y++) {
        for (i = 0; i < length; i++) {
            if (arguments[0][i] == arguments[y] && typeof(arguments[0][i]) == typeof(arguments[y])) {
                arguments[0].splice(i, 1);
                i = i - 1;
            }
        }
    }
    return arguments[0];

};

// Do not edit below this line
module.exports = removeFromArray;
