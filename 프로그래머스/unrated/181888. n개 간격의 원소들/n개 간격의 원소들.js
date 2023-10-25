function solution(num_list, n) {
    var answer = [];
    num_list.forEach((num, i) => {
        if(i % n === 0) answer.push(num);
    })
    return answer;
}