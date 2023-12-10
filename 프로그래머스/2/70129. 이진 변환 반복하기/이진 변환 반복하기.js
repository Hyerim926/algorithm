function solution(s) {
    var answer = [];
    
    let countOfChange = 0;
    let countOfZero = 0;
    
    while(s !== '1') {
        countOfZero += s.split('0').length - 1;
        s = s.replaceAll('0', '').length.toString(2);
        countOfChange++;
    }
    
    answer = [countOfChange, countOfZero];
    
    return answer;
}