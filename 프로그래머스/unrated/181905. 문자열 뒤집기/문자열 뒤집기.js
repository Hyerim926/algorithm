function solution(my_string, s, e) {
    var answer = '';
    const reversed = my_string.slice(s, e + 1).split('').reverse().join('');
    
    answer = my_string.slice(0, s) + reversed + 
        my_string.slice(e + 1, my_string.length)
    return answer;
}