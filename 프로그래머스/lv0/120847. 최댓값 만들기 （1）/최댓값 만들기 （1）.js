function solution(numbers) {
    var answer = 0;
    
    const sorted = numbers.sort((a, b) => a - b);
    
    answer = sorted[sorted.length - 2] * sorted[sorted.length - 1];
    return answer;
}