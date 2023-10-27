function solution(numbers, n) {
    var answer = 0;
    let i = 0;
    while(answer <= n && i < numbers.length) {
        answer += numbers[i];
        i++;
    }
    return answer;
}