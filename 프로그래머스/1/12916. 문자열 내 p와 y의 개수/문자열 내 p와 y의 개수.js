function solution(s){
    var answer = true;

    let p = 0;
    let y = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i].toLowerCase() === 'p') {
            p++;
        }
        if(s[i].toLowerCase() === 'y') {
            y++;
        }
    }

    answer = p === y;
    return answer;
}