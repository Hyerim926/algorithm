function solution(common) {
    var answer = 0;
    
    let pattern;
    // 등차수열
    if(common[2] - common[1] === common[1] - common[0]) {
        pattern = common[2] - common[1];
        answer = common[common.length - 1] + pattern;
    }
    
    // 등비수열
    if(common[2] / common[1] === common[1] / common[0]) {
        pattern = common[2] / common[1];
        answer = common[common.length - 1] * pattern;
    }
    return answer;
}