function solution(n) {
    var answer = 0;
    
    let isUnder = true;
    let num = 1;
    let factResult = 1;
    while(isUnder) {
        factResult = factResult * (num + 1);
        num++;
        
        if(factResult >= n) {
            isUnder = false;
        }
    }
    
    answer = factResult === n ? num : num - 1;
    
    return answer;
}