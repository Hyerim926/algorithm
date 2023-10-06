function solution(array, n) {
    var answer = 0;
    
    const nArr = array.filter((one) => one === n);
    answer = nArr.length;
    return answer;
}