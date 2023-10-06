function solution(my_string) {
    var answer = '';

    const strList = my_string.toLowerCase().split('').sort();
    
    answer = strList.join('');
    return answer;
}