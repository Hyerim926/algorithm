function solution(my_string) {
    var answer = 0;
    
    const onlyNumArr = my_string
    .replaceAll(/[a-zA-z]/g, '')
    .split('') 
    .map((num) => Number(num));
    
    let init = 0;
    answer = onlyNumArr.reduce((acc, cur) => acc + cur, init)
    return answer;
}