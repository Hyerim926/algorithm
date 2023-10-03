function solution(s) {
    var answer = '';
    
    const obj = {};
    for(let i = 0; i < s.length; i++) {
        if(!obj[s[i]]) {
            obj[s[i]] = 0;
        }
        obj[s[i]]++;    
    }
    
    let oneList = Object.keys(obj).filter(key => obj[key] === 1);
    oneList.sort();
    
    answer = oneList.join('');
    return answer;
}