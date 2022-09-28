const sumAll = function(start,end) {
    let sum = start;
    do {
        start ++;
        sum = start + sum;
        //console.log(start, sum)
    } while (end > start);
return sum
};

// Do not edit below this line
module.exports = sumAll;
