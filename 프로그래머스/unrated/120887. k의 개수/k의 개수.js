function solution(i, j, k) {
    var answer = 0;
    for(let num = i; num <= j; num++) {
        let str = String(num);
        for(let strIdx = 0; strIdx < str.length; strIdx++) {
            if(str[strIdx] === String(k)) answer++;
        }
    }
    return answer;
}