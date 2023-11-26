function solution(s) {
    var answer = true;
    var regexp = /[A-Za-z]/gi;
    
    answer = (s.length === 4 || s.length === 6) && s.match(regexp) === null;
    return answer;
}