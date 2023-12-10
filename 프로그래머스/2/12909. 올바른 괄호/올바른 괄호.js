function solution(s){
    var answer = true;
    
    const que = [];
    
    if(s.length % 2 !== 0) {
        answer = false;
    } else {
        for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') que.push('(');
        if(s[i] === ')') que.pop();
        }
    }
    
    if(que.length > 0) answer = false;
    
    return answer;
}