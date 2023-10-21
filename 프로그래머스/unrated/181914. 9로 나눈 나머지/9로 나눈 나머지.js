function solution(number) {
    let sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += +number[i];
    }
    
    const rest = sum % 9;
    
    return rest;
}