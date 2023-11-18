function solution(n) {
    var answer = 0;
    const nums = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 1) nums.push(i);
    }
    
    answer = Math.min(...nums);
    return answer;
}