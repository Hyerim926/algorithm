function solution(numbers) {
    var answer = 0;
    
    numbers.sort((a, b) => a - b);
    
    const res1 = numbers[0] * numbers[1];  
    const res2 = numbers[numbers.length - 1] * numbers[numbers.length -2]

    answer = res1 > res2 ? res1 : res2;

    return answer;
}