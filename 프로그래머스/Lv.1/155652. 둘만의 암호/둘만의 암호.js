function solution(s, skip, index) {
    var answer = '';
    const regExp = new RegExp(`[${skip}]`, 'g');

    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.replace(regExp, '');
    
    let nowIdx;
    for(let i = 0; i < s.length; i++) {
        nowIdx = alphabet.indexOf(s[i]);
        if(nowIdx + index < alphabet.length) {
            answer += alphabet[nowIdx + index];
        } else {
            answer += alphabet[(nowIdx + index) % alphabet.length];
        }
    }
    return answer;
}