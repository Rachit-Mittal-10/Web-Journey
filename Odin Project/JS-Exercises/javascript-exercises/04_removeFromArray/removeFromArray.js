"use strict";

const removeSingleElementArray = function(array,element){
    while(array.includes(element) != false){
        let index = array.indexOf(element,0);
        array.splice(index,1);
    }
    return array;
};

const removeFromArray = function(array,...elements) {
    let argumentsLength = elements.length;
    for(let i=0;i<argumentsLength;i++){
        array = removeSingleElementArray(array,elements[i]);
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
