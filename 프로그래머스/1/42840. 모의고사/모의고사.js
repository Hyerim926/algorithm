function solution(answers) {
    var answer = [];
    const first = [1, 2, 3, 4, 5];
    const second = [2, 1, 2, 3, 2, 4, 2, 5];
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    const score = [0, 0, 0];
    answers.forEach((q, i) => {
        if(q === first[i % first.length]) score[0]++;
        if(q === second[i % second.length]) score[1]++;
        if(q === third[i % third.length]) score[2]++;
    })
    
    const max = Math.max(...score);
    
    score.forEach((one, i) => {
        if(max === one) answer.push(i + 1);
    })
    
    
    return answer;
}