function solution(a, d, included) {
    var answer = 0;
    for(let i = 1; i <= included.length; i++) {
        let sum = a + (i - 1) * d;
        if(included[i - 1]) answer += sum;
    }
    return answer;
}