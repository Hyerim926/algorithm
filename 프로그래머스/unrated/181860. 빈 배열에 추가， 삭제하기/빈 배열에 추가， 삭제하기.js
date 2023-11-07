function solution(arr, flag) {
    var answer = [];
    flag.forEach((f, i) => {
        if(f) {
            answer = [...answer, ...Array(arr[i] * 2).fill(arr[i])]
        } else {
            answer = answer.slice(0, answer.length - arr[i])
        }
    })
    return answer;
}