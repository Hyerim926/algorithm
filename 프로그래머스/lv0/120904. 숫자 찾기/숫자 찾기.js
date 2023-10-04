function solution(num, k) {
    var answer = 0;
    const numList = String(num).split('').map((one) => +one);
    
    const index = numList.indexOf(k);
    answer = index === -1 ? -1 : index + 1;
    return answer;
}