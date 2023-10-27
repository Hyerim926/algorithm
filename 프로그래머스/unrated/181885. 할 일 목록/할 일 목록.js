function solution(todo_list, finished) {
    var answer = [];
    finished.forEach((one, i) => {
        if(!one) answer.push(todo_list[i]);
    })
    return answer;
}