function solution(a, b, c) {
    // 기본값
    var answer = a + b + c;
    
    const numSetSize = new Set([a, b, c]).size;
    
    if(numSetSize < 3) {
        // 하나라도 같은 값이 있을 때
        answer *= (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));

        // 모두 동일
        if(numSetSize === 1) {
            answer *= (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
        }
    }
    return answer;
}