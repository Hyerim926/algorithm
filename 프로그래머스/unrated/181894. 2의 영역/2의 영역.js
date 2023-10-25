function solution(arr) {
    var answer = [];
    const indexOf = arr.indexOf(2);
    const lastIndexOf = arr.lastIndexOf(2);

    if(indexOf === -1) {
        answer = [-1];
    } else if(indexOf === lastIndexOf) {
        answer = [2];
    } else {
        for(let i = indexOf; i <= lastIndexOf; i++) {
            answer.push(arr[i]);
        }
    }

    return answer;
}