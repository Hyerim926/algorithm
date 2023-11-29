function solution(s) {
    const location = {};
    var answer = [];
    for(let i = 0; i < s.length; i++) {
        if(!location[s[i]]) {
            answer.push(-1);
        } else {
            answer.push(i - location[s[i]]);
        }
        location[s[i]] = String(i);
    }
    return answer;
}