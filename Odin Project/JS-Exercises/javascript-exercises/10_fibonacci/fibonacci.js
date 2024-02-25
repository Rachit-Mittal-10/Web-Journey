let fibonacci_array = [0,1,1];

const fibonacci = function(position, memo = {}) {
    if(position < 0){
        return "OOPS";
    }
    if(position == 0){
        return 0;
    }
    if(position == 1 || position == 2){
        return 1;
    }

    if(memo[+position]){
        return memo[+position];
    }
    let ans = fibonacci(position-1) + fibonacci(position-2);
    memo[+position] = ans;
    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
