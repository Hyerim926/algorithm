function solution(my_string, m, c) {
    var answer = '';
        
    for(let i = 0; i < my_string.length;) {
        for(let j = 0; j < m; j++) {
            if(j === c - 1) {
                answer += my_string[j + i];
            }
        }
        i = i + m;
    }
    
    return answer;
}