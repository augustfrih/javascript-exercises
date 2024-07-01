const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    }
    
    let i = 0;
    let strings = [""]

    while (i < num) {
        strings[i + 1] = strings[i] + string;
        i++;
    }

    return strings[i];
}
// Do not edit below this line
module.exports = repeatString;
