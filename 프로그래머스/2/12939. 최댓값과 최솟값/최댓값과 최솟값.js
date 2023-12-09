function solution(s) {
    var answer = '';
    const arr = s.split(' ').map((str) => Number(str));
    
    answer += Math.min(...arr);
    answer += ' ';
    answer += Math.max(...arr);
    return answer;
}