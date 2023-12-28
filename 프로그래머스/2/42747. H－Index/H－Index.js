function solution(citations) {
    var answer = 0;
    
    citations.sort((a, b) => b - a);
    
    const hIdx = [];
    let now;
    let up;
    for(let i = 0; i < citations.length; i++) {
        now = citations[i];
        up = citations.filter((count) => count >= now).length;
        hIdx.push(Math.min(now, up))
    }
    
    answer = Math.max(...hIdx);
    return answer;
}