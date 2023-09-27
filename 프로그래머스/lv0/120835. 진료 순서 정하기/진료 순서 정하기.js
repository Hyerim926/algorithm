function solution(emergency) {
    var answer = [];
    const originalArr = [...emergency];
    const sortedArr = originalArr.sort((a, b) => b - a);
    
    answer = emergency.map((one) => sortedArr.indexOf(one) + 1)
    
    return answer;
}