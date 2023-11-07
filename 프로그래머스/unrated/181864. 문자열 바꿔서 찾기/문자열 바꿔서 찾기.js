function solution(myString, pat) {
    let newString = '';
    
    for(let i = 0; i < myString.length; i++) {
        if(myString[i] === 'A') newString += 'B';
        if(myString[i] === 'B') newString += 'A';
    }
    
    return newString.includes(pat) ? 1 : 0;
}