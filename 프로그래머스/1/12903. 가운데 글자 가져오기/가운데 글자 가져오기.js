function solution(s) {
    var answer = '';
    const i = parseInt(s.length / 2);
    answer = s.length % 2 === 0 ? s[i - 1] + s[i] : s[i];
    return answer;
}