function solution(array) {
    const sortedArray = array.sort((a, b) => a - b)
    
    var answer = 0;
    let index;
    if(array.length % 2 === 0) {
        index = array.length / 2;
        answer = (sortedArray[index] + sortedArray[index + 1]) / 2
    } else {
        index = Math.trunc(array.length / 2)
        answer = sortedArray[index];
    }
    return answer;
}