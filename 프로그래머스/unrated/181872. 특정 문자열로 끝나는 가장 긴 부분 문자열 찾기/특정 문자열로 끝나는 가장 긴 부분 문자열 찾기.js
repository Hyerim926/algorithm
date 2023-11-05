function solution(myString, pat) {
    var answer = '';
    const lastIdx = myString.lastIndexOf(pat);
    
    answer = myString.slice(0, lastIdx + pat.length)
    return answer;
}