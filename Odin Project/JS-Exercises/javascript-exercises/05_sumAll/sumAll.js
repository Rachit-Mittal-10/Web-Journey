const sumN = function(num){
    if(num === 0){
        return 0;
    }
    return num*(num+1)/2;
}
const sumAll = function(start,end) {
    if(typeof start !== typeof end && typeof start !== Number){
        return "ERROR";
    }
    if(start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    if(start < 0 || end < 0){
        return "ERROR";
    }
    // let sum = 0;
    // for(let i=start;i<=end;i++){
    //     sum += i;
    // }
    let sum = sumN(end) - sumN(start-1);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
