function solution(k, score) {
    var answer = [];
    
    let mvp = [];
    let anouncedScr;
    let kth;
    for(let i = 0; i < score.length; i++) {
        if(i < k) {
            mvp.push(score[i]);
        } else {
            if(mvp[k - 1] < score[i]) {
                mvp.splice(k - 1, 1);
                mvp.push(score[i]);
            }
        }
        mvp.sort((a, b) => b - a);
        answer.push(mvp[mvp.length - 1]);
    }
    return answer;
}