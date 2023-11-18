function solution(s) {
    var answer = 0;
    if(s[0] === '-') {
        answer -= parseInt(s.replace('-', ''));
    } else {
        answer += parseInt(s);
    }
    return answer;
}