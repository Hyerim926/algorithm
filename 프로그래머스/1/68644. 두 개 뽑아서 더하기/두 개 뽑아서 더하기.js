function solution(numbers) {
    var answer = [];
    for(let i = 0 ; i < numbers.length; i++) {
        for(let j = i; j < numbers.length; j++) {
            if(i !== j) {
                answer.push(numbers[i] + numbers[j]);
            }
        }
    }
    
    answer = Array.from(new Set(answer)).sort((a, b) => a - b);
    return answer;
}