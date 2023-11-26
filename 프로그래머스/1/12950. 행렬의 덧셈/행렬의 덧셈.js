function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++) {
        answer[i] = [];
        for(let j = 0; j < arr1[i].length; j++) {
            let sum = 0;
            answer[i][j] = [];
            sum += arr1[i][j];
            sum += arr2[i][j];
            answer[i][j] = sum;
        }
    }
    return answer;
}