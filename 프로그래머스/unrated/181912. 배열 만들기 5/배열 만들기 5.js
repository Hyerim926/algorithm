function solution(intStrs, k, s, l) {
    var answer = [];
    intStrs.forEach((one) => {
        let sliced = +one.slice(s, s + l);
        if(sliced > k) answer.push(sliced);
    })
    return answer;
}