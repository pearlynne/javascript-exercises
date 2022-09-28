const reverseString = function (word) {
    let output = word.split('');
    let newstring = "";
    //let arr = [];
    for (i = output.length - 1; i >= 0; i--) {
     // arr.push(output[i]);
      newstring += output[i];
    }
  
    //return arr;
    return newstring;
  
  };

// Do not edit below this line
module.exports = reverseString;
