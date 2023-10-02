function solution(num_list, n) {
    var answer = [];

    for(let i = 0; i < num_list.length;) {
        const oneArr = [];
        for(let j = 0; j < n; j++) {
            oneArr.push(num_list[i])
            i++;
        }
        answer.push(oneArr);
    }
    return answer;
}