function solution(numbers, direction) {
    var answer = [];
    let copied;
    if(direction === 'right') {
        copied = [...numbers];
        copied.pop();
        answer = [numbers[numbers.length - 1], ...copied];
    }
    
    if(direction === 'left') {
        copied = [...numbers];
        copied.shift();
        answer = [...copied, numbers[0]];
    }
    return answer;
}