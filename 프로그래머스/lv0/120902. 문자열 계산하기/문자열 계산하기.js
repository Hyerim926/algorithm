function solution(my_string) {
    var answer = 0;
    const list = my_string.split(' ');
    
    for(let i = 0; i < list.length; i++) {
        if(i === 0) {
            answer = Number(list[i]);
        } else if(list[i] === '+') {
            answer += Number(list[i + 1]);
        } else if(list[i] === '-') {
            answer -= Number(list[i + 1]);
        }
    }
    
    
    return answer;
}