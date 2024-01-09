function solution(s) {
    var answer = 0;
    
    let same = 0;
    let notSame = 0;
    let str;
    for(let i = 0; i < s.length; i++) {
        if(!str) {
            str = s[i];
        }
        
        if(str === s[i]) {
            same++;
        } else {                
            notSame++;
        }
            
        if(same === notSame){
            same = 0;
            notSame = 0;
            str = undefined;
            answer++;
        }
    }
    
    if(same !== 0 || notSame !== 0) answer++;    

    return answer;
}