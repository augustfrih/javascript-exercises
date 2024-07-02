const reverseString = function(string) {

    let length = string.length;
    let strArray = [];
    let strings = [];

    for (i = 0; i < length; i++) {
        strArray[i] = string.slice(i, (i + 1));
    }

    for (i = length; i >= 0; i--) {
        if (i == length) {
            strings[i] = "";
        } else {
            strings[i] = strings[i + 1] + strArray[i];
        }
    }

    return strings[0];

};

// Do not edit below this line
module.exports = reverseString;
