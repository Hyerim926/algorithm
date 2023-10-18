function solution(num_list) {
    var answer = 0;
    let times = 1;
    let sum = 0;
    
    num_list.forEach((num) => {
        times *= num;
        sum += num;
    })
    sum = Math.pow(sum, 2);

    answer = times > sum ? 0 : 1;
    return answer;
}