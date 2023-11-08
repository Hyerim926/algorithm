function solution(arr) {
    var answer = arr;
    const length = arr.length;
    let num = 0;
    
    while(Math.pow(2, num) < length) num++;
    
    for(let i = 0; i < Math.pow(2, num) - length; i++) {
        answer.push(0)
    }
    
    return answer;
}