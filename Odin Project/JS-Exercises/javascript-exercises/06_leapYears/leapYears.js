const divisibilityCheck = function(num1,num2){
    return !Boolean(num1%num2);
}

const leapYears = function(year) {
    if(divisibilityCheck(year,4) && !divisibilityCheck(year,100)){
        return true;
    }
    else if(divisibilityCheck(year,400)){
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;
