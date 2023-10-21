function solution(a, b, c, d) {
    var answer = 0;
    const arr = [a, b, c, d];
    const set = new Set(arr);
    const obj = {};
    arr.forEach((one) => {
        if(!obj[one]) {
            obj[one] = 1;
        } else {
            obj[one]++;
        }
    })
        
    console.log(obj)
    if(set.size === 1) {
        answer = 1111 * a;
    }
    
    if(set.size === 2) {
        if(Object.keys(obj).find(key => obj[key] === 3)) {
            const p = +Object.keys(obj).find(key => obj[key] === 3);
            const q = +Object.keys(obj).find(key => obj[key] === 1);
                                            
            answer = Math.pow((10 * p + q), 2);
        }
        
        if(Object.keys(obj).find(key => obj[key] === 2)) {
            const temp = Array.from(set);
            answer = (temp[0] + temp[1]) * Math.abs(temp[0] - temp[1]);
        }
    }
    
    if(set.size === 3) {
        const p = Object.keys(obj).find(key => obj[key] === 2);
        const rest = arr.filter((one) => one !== +p);
        answer = rest[0] * rest[1];
    }
    
    if(set.size === 4) {
        answer = Math.min(...arr);
    }
    
    return answer;
}