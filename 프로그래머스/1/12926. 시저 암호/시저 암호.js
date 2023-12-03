function solution(s, n) {
    var answer = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += " ";
            continue;
        }
        
        let type = upper.includes(s[i]) ? upper : lower;
        let index = type.indexOf(s[i]) + n;;
        if (index >= type.length) index -= type.length;
        
        answer += type[index];
    }
    
    return answer;
}