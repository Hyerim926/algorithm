const isEven = (num) => {
    return num % 2 === 0;
}
function solution(a, b) {
    var answer = 0;
    if(!isEven(a) && !isEven(b)) {
        answer = a ** 2 + b ** 2;
    } else if(isEven(a) && isEven(b)) {
        answer = Math.abs(a - b);
    } else {
        answer = 2 * (a + b);
    }
    return answer;
}