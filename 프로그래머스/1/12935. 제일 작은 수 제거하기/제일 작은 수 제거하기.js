function solution(arr) {
    const min = Math.min(...arr);
    var answer = arr.filter((num) => num !== min);
    
    if(answer.length === 0) answer.push(-1);
    return answer;
}