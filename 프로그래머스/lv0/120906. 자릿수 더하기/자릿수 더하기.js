function solution(n) {
    var answer = 0;
    
    const numList = String(n).split('').map((one) => +one);
    
    let init = 0;
    answer = numList.reduce((accu, curr) => accu + curr, init);
    return answer;
}