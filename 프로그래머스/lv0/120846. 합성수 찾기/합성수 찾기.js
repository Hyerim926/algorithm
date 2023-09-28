function solution(n) {
    var answer = 0;
    
    const countArr = new Array(n + 1).fill(0);
    
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) countArr[i]++;
        }
    }
    
    const hapseong = countArr.filter((one) => one >= 3);
    answer = hapseong.length;
    return answer;
}