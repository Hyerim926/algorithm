function solution(num) {
    var answer = num === 1 ? 0 : -1;
    
    let count = 0;
    while(num !== 1 && count <= 500) {
        if(num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        count++;
    }
    
    answer = count > 0 && count < 501 ? count : answer;
    return answer;
}