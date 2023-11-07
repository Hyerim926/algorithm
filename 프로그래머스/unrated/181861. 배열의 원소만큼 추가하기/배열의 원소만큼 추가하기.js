function solution(arr) {
    var answer = [];
    arr.forEach((num) => {
        answer = [...answer, ...Array(num).fill(num)]
    })
    return answer;
}