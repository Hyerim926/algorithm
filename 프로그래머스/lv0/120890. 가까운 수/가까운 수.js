function solution(array, n) {
    var answer = 0;
    
    array.sort((a, b) => a - b);
    
    const sorted = array.map((num) => Math.abs(n - num));
    
    const min = Math.min(...sorted);
    
    answer = array[sorted.indexOf(min)]
    return answer;
}