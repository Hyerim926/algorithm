function solution(strArr) {
    var answer = [];
    strArr.forEach((str) => {
        if(!str.includes('ad')) answer.push(str)
    })
    return answer;
}