function solution(name, yearning, photo) {
    var answer = [];
    const score = {};
    name.forEach((one, i) => {
        score[one] = yearning[i];
    })

    for(let i = 0; i < photo.length; i++) {
        let each = 0;
        for(let j = 0; j < photo[i].length; j++) {
            if(score[photo[i][j]]) each += score[photo[i][j]];
        }
        answer.push(each);
    }

    return answer;
}