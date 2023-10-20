function solution(l, r) {
    var answer = [];
    
    const numStr = ['0', '5'];
    for(let i = l; i <= r; i++) {
        let str = String(i).split('');
        let filtered = str.filter((one) => !numStr.includes(one));
        if(filtered.length === 0) {
            answer.push(i);
        }
    }
    
    return answer.length > 0 ? answer : [-1];
}