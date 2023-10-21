function solution(my_string, is_suffix) {
    var answer = 0;
    
    const suffix = [];
    for(let i = 0; i < my_string.length; i++) {
        suffix.push(my_string.slice(i))
    }
    
    answer = suffix.includes(is_suffix) ? 1 : 0;
    return answer;
}