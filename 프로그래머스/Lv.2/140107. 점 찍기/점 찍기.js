function solution(k, d) {
    var answer = 0;
    
    for(let i = 0; i <= d; i = i + k) {
        const maxY = Math.sqrt(Math.pow(d, 2) - Math.pow(i, 2));
        const yCount = Math.floor(maxY / k) + 1;
        answer += yCount;
    }
    return answer;
}