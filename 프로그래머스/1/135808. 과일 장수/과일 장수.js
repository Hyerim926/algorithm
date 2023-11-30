function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    
    
    const appleBox = [];
    for(let i = 0; i < score.length; i += m) {
        let chunk = score.slice(i, i + m);
        if(chunk.length === m) appleBox.push(chunk);
    }
    
    
    for(let i = 0 ; i < appleBox.length; i++) {
        let min = Math.min(...appleBox[i]);
        let profit = min * m;
        answer += profit;
    }


    return answer;
}