function solution(picture, k) {
    var answer = [];
    for(let i = 0; i < picture.length; i++) {
        let str = '';
        for(let j = 0; j < picture[i].length; j++) {
            for(let l = 0; l < k; l++) {
                str += picture[i][j];
            }
        }
        for(let m = 0; m < k; m++) {
            answer.push(str);
        }       
    }
    return answer;
}