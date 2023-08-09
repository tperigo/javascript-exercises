const repeatString = function (str, num) {
    if (num < 0) {
        return "ERROR";
    }
    let output = "";
    for (let i = 0; i <= num - 1; i++) {
        output = output + str;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
