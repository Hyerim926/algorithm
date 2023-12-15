function solution(k, tangerine) {
    var answer = 0;
    const obj = {};
    
    for(let i = 0; i < tangerine.length; i++) {
        if(!obj[tangerine[i]]) {
            obj[tangerine[i]] = 1;
        } else {
            obj[tangerine[i]]++;
        }
    }
    
    const count = Object.values(obj);
    
    if(Math.max(...count) >= k) {
        answer = 1;
    } else {
        count.sort((a, b) => b - a);
        for(let i = 0; i < count.length; i++) {
            if(k > 0) {
                k -= count[i];
                answer++;   
            } else {
                break;
            }
        }
    }
    return answer;
}