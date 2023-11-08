function solution(arr, n) {
    var answer = [];
    const length = arr.length;
    
    if(length % 2 === 0) {
        answer = arr.map((num, i) => i % 2 !== 0 ? num + n : num);
    } else {
        answer = arr.map((num, i) => i % 2 === 0 ? num + n : num);  
    }
    return answer;
}