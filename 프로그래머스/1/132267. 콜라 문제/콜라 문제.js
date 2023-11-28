function solution(a, b, n) {
    var answer = 0;
    while(n >= a) {
        let share = parseInt(n / a);
        n = n - (a * share) + (share * b);
        answer += share * b;
    }
    
    return answer;
}