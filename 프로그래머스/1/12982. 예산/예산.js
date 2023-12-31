function solution(d, budget) {
    var answer = 0;

    d = d.sort((a, b) => a - b);
    
    for(let i = 0; i < d.length; i++) {
        budget -= d[i];
        if(budget >= 0) {
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
}