function solution(s) {
    var answer = 0;
    const strArr = s.split(' ');
    
    let pre = 0;
    strArr.forEach((str) => {
        if(str === 'Z') {
            answer -= pre;
        } else {
            answer += Number(str);
            pre = Number(str);
        }
    })
    return answer;
}