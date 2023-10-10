function solution(score) {
    var answer = new Array(score.length).fill(1)
    
    const avg = score.map((one) => (one[0] + one[1]) / 2);
    
    for(let i = 0; i < avg.length; i++) {
        for(let j = 0; j < avg.length; j++) {
            if(avg[i] < avg[j]) answer[i]++;
        }
    }
    return answer;
}