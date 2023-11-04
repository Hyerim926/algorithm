function solution(myString, pat) {
    var answer = 0;
    myString = myString.toLowerCase();
    pat = pat.toLowerCase();
    
    return myString.includes(pat) ? 1 : 0;
}