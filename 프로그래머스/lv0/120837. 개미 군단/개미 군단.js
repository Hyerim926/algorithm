function solution(hp) {
    var answer = 0;
    
    let need = hp;
    
    while(need > 0) {
        if(need >= 5) {
            need = need - 5;
            answer++;
        } else if(need >= 3) {
            need = need - 3;
            answer++;
        } else if(need >= 1) {
            need = need - 1;
            answer++;
        }
    } 
    return answer;
}