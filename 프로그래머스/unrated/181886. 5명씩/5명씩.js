function solution(names) {
    var answer = [];
    names.forEach((name, i) => {
        if((i) % 5 === 0) answer.push(name);
    })
    return answer;
}