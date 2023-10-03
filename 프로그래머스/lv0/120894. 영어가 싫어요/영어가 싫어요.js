function solution(numbers) {
    var answer = 0;

    let str = numbers;
    const regList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    regList.forEach((one, i) => {
        str = str.replaceAll(one, i)
    })
    

    answer = Number(str);
    return answer;
}