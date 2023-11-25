function solution(s) {
    var answer = '';
    const splited = s.split(' ');

    for(let i = 0; i < splited.length; i++) {
        for(let j = 0; j < splited[i].length; j++) {
            if(j % 2 === 0) {
                answer += splited[i][j].toUpperCase();
            } else {
                answer += splited[i][j].toLowerCase();
            }
        }
        if(i !== splited.length - 1) {
            answer += ' ';            
        }
    }
    return answer;
}