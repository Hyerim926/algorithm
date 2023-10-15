function solution(a, b) {
    var answer = 0;
    const first = Number(String(a) + String(b));
    const second = 2 * a * b;
    
    answer = second >= first ? second : first;
    return answer;
}