function solution(n) {
    var answer = 0;
    
    let toBe = n;
    let oneFromN = 0;
    let oneFromNext = 0;
    
    while(toBe <= 1000000) {
        toBe++;
        oneFromN = n.toString(2).split('1').length - 1;
        oneFromNext = toBe.toString(2).split('1').length - 1;
        if(oneFromN === oneFromNext) {
            break;
        }
    }

    answer = toBe;
    return answer;
}