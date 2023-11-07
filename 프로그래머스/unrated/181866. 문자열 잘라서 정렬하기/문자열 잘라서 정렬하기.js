function solution(myString) {
    var answer = myString.split('x').filter(Boolean).sort();
    return answer;
}