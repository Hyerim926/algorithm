function solution(balls, share) {
    var answer = 0;
    
    let nFact = 1;
    for(let i = balls; i >= 2; i--) {
        nFact *= i;
    }
    
    let mFact = 1;
    for(let i = share; i >= 2; i--) {
        mFact *= i;
    }
    
    let nAndmFact = 1;
    if(balls - share > 0) {
    for(let i = balls - share; i >= 2; i--) {
        nAndmFact *= i;
        }
    }

    answer = Math.round(nFact / (nAndmFact * mFact));
    
    return answer;
}