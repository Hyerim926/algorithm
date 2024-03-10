function solution(land) {
    var answer = 0;

    const landArr = Array.from({ length: land.length }, () => Array(4).fill(0));

    landArr[0] = land[0];
    
    for(let i = 0; i < land.length - 1; i++) {
        for(let j = 0; j < 4; j++) {
            for(let k = 0; k < 4; k++) {
                if(j===k) continue;
                const temp = landArr[i][j] + land[i + 1][k];
                if(temp > landArr[i + 1][k]) landArr[i + 1][k] = temp;
            }
        }
    }
    
    answer = Math.max(...landArr.at(-1));
    
    return answer;
}