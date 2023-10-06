function solution(array, height) {
    var answer = 0;

    array.forEach((one) => {
        if(one > height) answer++;
    })
    return answer;
}