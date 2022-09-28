const repeatString = function (str, num) {
    //let output = str.repeat(num)
    //return output;
    let output = "";
        for (let i = 1; i <= num; i++) {
        output += str
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
