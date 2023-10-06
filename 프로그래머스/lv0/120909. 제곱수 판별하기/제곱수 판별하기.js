function solution(n) {
    var answer = 0;
    
    const sqrt = Math.sqrt(n);
    
    
    answer = Number.isInteger(sqrt) ? 1 : 2;
    
    return answer;
}