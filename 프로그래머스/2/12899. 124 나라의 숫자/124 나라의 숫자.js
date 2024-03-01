function solution(n) {
    var answer = '';
    
    const numStack = [];
    
    while(n > 0) {
        if(n % 3 === 0) {
            numStack.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
            numStack.push(n % 3);
            n = Math.floor(n / 3);
        }
    }

    answer = numStack.reverse().join('');
    
    return answer;
}