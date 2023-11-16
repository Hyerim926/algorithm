function solution(t, p) {
    var answer = 0;
    const nums = [];
    for(let i = 0; i < t.length; i++) {
        let str = '';
        for(let j = i; j < i + p.length; j++) {
            str += t[j];
        }
        if(+str <= +p) {
            nums.push(+str);
        }
    }
    
    answer = nums.length;
    
    return answer;
}