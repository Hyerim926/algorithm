function solution(numbers) {
    var answer = 0;
    const initialValue = 0;
    const sumValue = numbers.reduce((acc, cur) => acc + cur, initialValue);
    
    answer = sumValue / numbers.length;
    return answer;
}