function solution(array) {
    var answer = [];
    const max = Math.max(...array);
    answer = [max, array.indexOf(max)]
    return answer;
}