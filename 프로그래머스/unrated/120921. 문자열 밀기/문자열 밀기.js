function solution(A, B) {
    var answer = 0;
    
    while(A !== B) {
        let lastStr = A[A.length - 1];
        A = A.slice(0, A.length - 1)
        A = lastStr + A;
        answer++;
        if(answer === A.length) {
            answer = -1;
            break;
        }
    }
    return answer;
}