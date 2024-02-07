function solution(n) {
    var answer = 0;
    
    let a = 1
    let b = 2;
    
    for(let i = 3; i <= n; i++) {
        [a, b] = [b, a];
        b = (a + b) % 1234567;
    }
    
    answer = n == 1 ? 1 : b;
    
    return answer;
}