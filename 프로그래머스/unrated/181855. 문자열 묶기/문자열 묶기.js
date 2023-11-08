function solution(strArr) {
    var answer = 0;
    
    const obj = {};
    
    strArr.forEach((str) => {
        if(!obj[str.length]) {
            obj[str.length] = 1;
        } else {
            obj[str.length]++;
        }
    })
    
    answer = Math.max(...Object.values(obj))
    return answer;
}