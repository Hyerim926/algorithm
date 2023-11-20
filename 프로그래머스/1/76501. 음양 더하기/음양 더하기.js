function solution(absolutes, signs) {
    var answer = 0;
    
    absolutes.forEach((num, i) => {
        if(signs[i]) {
            answer += num;
        } else {
            answer -= num;
        }
    })
    return answer;
}