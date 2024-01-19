function solution(numbers) {
    var answer = '';
    
    numbers.sort((a, b) => {
        a = a.toString();
        b = b.toString();
        if(a + b < b + a) return 1;
        if(a + b > b + a) return -1;
        if(a + b === b + a) return 0;
    });
    
    numbers.forEach((one) => answer += one);

    if(answer[0] === '0') answer = '0';
    
    return answer;
}