const removeFromArray = function(arr, ...item) {
    for (i = 0; i < arr.length; i++) {
        //console.log('i is '+ [i] + ' value is ' + arr[i])
        for (j = 0; j < item.length; j++) {
        //    console.log('j is ' + [j] + ' value is '  + item[j])
            if (arr[i] != item[j]) { 
        //        console.log(arr[i] + ' is the same as ' + item[j])
                continue }
                arr.splice(i,1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
