function solution(numlist, n) {
    var answer = [];
    
    const diff = numlist.map((num) => Math.abs(n - num)).sort((a, b) => a - b);
    
    for(let i = 0; i < diff.length; i++) {
        let nominee = numlist.filter((one) => Math.abs(n - one) === diff[i]);
        answer[i] = Math.max(...nominee);
        numlist = numlist.filter((one) => one !== answer[i])
    }
    
    return answer;
}