function solution(my_string) {
    var answer = [];
    
    const onlyNumArr = my_string
    .replaceAll(/[a-z]/g, '')
    .split('')
    .map((num) => Number(num));
    

    answer = onlyNumArr.sort((a, b) => a - b);

    return answer;
}