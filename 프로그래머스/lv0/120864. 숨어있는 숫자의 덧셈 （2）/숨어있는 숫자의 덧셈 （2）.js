function solution(my_string) {
    var answer = 0;
    const nums = my_string
                .replaceAll(/[A-Za-z]/g, '-')
                .split('-')
                .map((num) => Number(num));
    
    let init = 0;
    answer = nums.reduce((cur, acc) => cur + acc , init)
    return answer;
}