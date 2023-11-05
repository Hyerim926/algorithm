function solution(myString, pat) {
    var answer = 0;
    for(let i = 0; i < myString.length; i++) {
        let tempStr = myString.slice(i, i + pat.length);
        if(tempStr.includes(pat)) answer++;
    }
    return answer;
}