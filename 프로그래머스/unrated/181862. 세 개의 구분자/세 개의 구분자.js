function solution(myStr) {
    var answer = myStr.split(/a|b|c/).filter(Boolean);
    return answer.length > 0 ? answer : ['EMPTY'];
}