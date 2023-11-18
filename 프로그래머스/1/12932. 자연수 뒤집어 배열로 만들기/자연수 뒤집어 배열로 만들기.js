function solution(n) {
    var answer = n.toString().split('').reverse().map((x) => +x);
    return answer;
}