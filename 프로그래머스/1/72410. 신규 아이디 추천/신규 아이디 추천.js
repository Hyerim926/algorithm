function solution(new_id) {
    var answer = '';
    
    // step 1
    answer = new_id.toLowerCase();
    
    // step 2
    const secondRegExp = /[^a-z0-9-_\.]/g;
    answer = answer.replaceAll(secondRegExp, '')
    
    // step 3
    answer = answer.replaceAll(/\.{2,}/g, '.');
    
    // step 4
    answer = answer.replaceAll(/^\.+|\.+$/g, '');
    
    // step 5
    if(answer.length === 0) answer = 'a';
    
    // step 6
    if(answer.length > 15) {
        answer = answer.substring(0, 15);
        answer = answer.replace(/\.$/, '');
    }
    
    if(answer.length <= 2) {
        let lastStr = answer[answer.length - 1];
        while (answer.length < 3) {
            answer += lastStr;
        }
    }
    
    return answer;
}