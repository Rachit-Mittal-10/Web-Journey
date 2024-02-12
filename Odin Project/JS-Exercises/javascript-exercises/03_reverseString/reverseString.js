const reversedString = function(str) {
    let reverseString = '';
    let stringLength = str.length;
    let lastIndex = stringLength - 1;
    for(let i=lastIndex;i>=0;i--){
        reverseString += str.at(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reversedString;
