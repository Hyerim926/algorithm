function solution(strArr) {
    var answer = [];
    strArr.forEach((str, i) => {
        if(i % 2 !== 0) {
            answer.push(str.toUpperCase());
        } else {
            answer.push(str.toLowerCase());
        }
    })
    return answer;
}