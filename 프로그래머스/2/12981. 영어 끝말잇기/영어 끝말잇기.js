function solution(n, words) {
    var answer = [];

    let turn = 1;
    let who = 1;
    const obj = {};
    let isPass = true;
    
    let pre;
    let cur;
    obj[words[0]] = 1;
    
    for(let i = 1; i < words.length; i++) {
        if(i % n === 0) turn++;
        who = (i % n) + 1;
        
        pre = words[i - 1];
        cur = words[i];
        if(!obj[cur]) {
            obj[cur] = 1;
        } else {
            isPass = false;
            break;
        }
        if(pre[pre.length - 1] !== cur[0]) {
            isPass = false;
            break;
        }
    }
    
    if(isPass && turn === words.length / n && who === n) {
        answer = [0, 0];
    } else {
        answer = [who, turn];
    }

    return answer;
}