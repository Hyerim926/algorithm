String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function solution(my_string, indices) {
    var answer = my_string;
    
    for(let i = 0; i < indices.length; i++) {
        answer = answer.replaceAt(indices[i], '0');
    }
    
    answer = answer.replaceAll('0', '')
    
    return answer;
}