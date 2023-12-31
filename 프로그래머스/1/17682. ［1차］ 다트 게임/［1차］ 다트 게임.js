function solution(dartResult) {
    var answer = 0;
    
    const score = {
        S: 1,
        D: 2,
        T: 3
    };
    
    const tempArr = [];
    
    let pattern = /(\d+|\D)/g;
    let matchArr = dartResult.match(pattern);
    
    for(let i = 0; i < matchArr.length; i++) {
        if(score[matchArr[i]]) {
            tempArr.push(Math.pow(matchArr[i - 1], score[matchArr[i]]));
        } else if(matchArr[i] === '*') {
            tempArr[tempArr.length - 1] *= 2;
            tempArr[tempArr.length - 2] *= 2;
        } else if(matchArr[i] === '#') {
            tempArr[tempArr.length - 1] = -tempArr[tempArr.length - 1];
        } 
    }

    answer = tempArr.reduce((acc, cur) => acc + cur, 0);
    
    return answer;
}