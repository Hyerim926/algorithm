function solution(my_string) {
    var answer = Array.from({length: 52}, () => 0);
    const big = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 65));    
    const small = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
    
    const alphabet = [...big, ...small]
    
    const obj = {};
    for(let i = 0; i < my_string.length; i++) {
        let str = my_string[i];
        if(!obj[str]) {
            obj[str] = 1;
        } else {
            obj[str]++;
        }
    }

    Object.keys(obj).forEach((key) => {
        let idx = alphabet.indexOf(key);
        
        answer[idx] = obj[key];
    })
    return answer;
}