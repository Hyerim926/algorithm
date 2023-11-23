function solution(x) {
    const sum = x.toString().split('').reduce((acc, cur) => +acc + +cur, 0);
    
    return x % sum === 0;
}