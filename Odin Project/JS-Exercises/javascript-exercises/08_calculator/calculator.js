const add = function (a,b) {
	return a + b;
};

const subtract = function (a,b) {
	return a-b;
};

const sum = function (array) {
	let result = array.reduce(
		(sum,current) => sum+current,
		0);
	return result;
};

const multiply = function (array) {
	let result = array.reduce(
	(ans,current) => ans*current,
	1
	);
	return result;
};

const power = function (base,exponent) {
	let ans = 1;
	for(let i=0;i<exponent;i++){
		ans = ans*base;
	}
	return ans;
};

const factorial = function (num) {
	if(num === 0 || num === 0){
		return 1;
	}
	let ans = 1;
	for(let i=num;i>0;i--){
		ans = ans*i;
	}
	return ans;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
};
