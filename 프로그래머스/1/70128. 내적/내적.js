function solution(a, b) {
    var answer = 0;
    a.forEach((one, i) => {
        answer += one * b[i];
    })
    return answer;
}