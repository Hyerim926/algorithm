function solution(numLog) {
    var answer = '';
    let first = numLog[0];
    for(let i = 1; i < numLog.length; i++) {
        let diff = numLog[i] - numLog[i - 1];
        
        if(diff === 1) {
            answer += 'w';
        }
        if(diff === -1) {
            answer += 's';
        }
        if(diff === 10) {
            answer += 'd';
        }
        if(diff === -10) {
            answer += 'a';
        }
    }
    return answer;
}