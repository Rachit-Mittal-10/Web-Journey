"use strict";

// This Function checks whether num1 is divisible by num2 or not.
let divisibility = function(num1, num2){
    return !Boolean(num1%num2);
}
function main(){
    let number = parseInt(prompt("Enter the Number: ",""));
    number = number??0;
    for(let i=1;i<=number;i++){
        if(divisibility(i,15)){
            alert("FizzBuzz");
        }
        else if(divisibility(i,3)){
            alert("Fizz");
        }
        else if(divisibility(i,5)){
            alert("Buzz");
        }
        else{
            alert(i);
        }
    }
}

main()