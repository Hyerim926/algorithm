function solution(a, b) {
    var answer = 0;
    const first = Number(String(a) + String(b));
    const second = Number(String(b) + String(a));
    
    answer = first > second ? first : second;
    return answer;
}