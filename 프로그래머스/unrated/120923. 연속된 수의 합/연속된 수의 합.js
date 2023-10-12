function solution(num, total) {
    var answer = [];

    let nums = 0;
    for(let i = 0; i < num; i++) {
        nums += i;
    }
    
    const x = (total - nums) / num;
    
    for(let i = 0; i < num; i++) {
        answer.push(x + i);
    }
    
    return answer;
}