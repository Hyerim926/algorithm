function solution(sides) {
    var answer = 0;
    
    const max = Math.max(...sides)
    const min = Math.min(...sides)
    // 만약 기존 요소 중 가장 긴 변이 있다면
    for(let i = max - min + 1 ; i <= max ; i++) {
        answer++
    }
    // 나머지 한 변이 가장 긴 변인 경우
    for(let i = max + 1 ; i < max + min ; i++) {
        answer++
    }
    
    return answer;
}