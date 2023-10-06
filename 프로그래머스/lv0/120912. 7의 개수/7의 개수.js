function solution(array) {
    var answer = 0;
    const newArr = array.map(one => String(one).split('')).flat()
    
    answer = newArr.filter((one) => one === '7').length;
    return answer;
}