function solution(str1, str2) {
    var answer = 0;
    
    const regExp = new RegExp(str2, 'g');
    
    answer = str1.match(regExp) ? 1 : 2;
    return answer;
}