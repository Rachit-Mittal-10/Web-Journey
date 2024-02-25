const palindromes = function (string) {
    let str = string.toLowerCase();
    let i = 0;
    let j = str.length-1;
    while(i<=j){
        let cond_i = str[i] >= 'a' && str[i] <= 'z';
        let cond_j = str[j] >= 'a' && str[j] <= 'z';
        let num_cond_i = str[i] >= '0' && str[i] <= '9';
        let num_cond_j = str[j] >= '0' && str[j] <= '9';
        if(!cond_i && !num_cond_i){
            i++;
            continue;
        }
        if(!cond_j && !num_cond_j){
            j--;
        continue;
        }
        if(str[i] != str[j]){
            return false;
        }
        i++;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
