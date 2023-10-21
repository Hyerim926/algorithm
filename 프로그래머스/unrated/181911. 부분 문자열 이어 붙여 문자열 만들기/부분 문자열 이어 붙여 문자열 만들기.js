function solution(my_strings, parts) {
    var answer = '';
    my_strings.forEach((one, i) => {
        answer += one.slice(parts[i][0], parts[i][1] + 1)
    })
    return answer;
}