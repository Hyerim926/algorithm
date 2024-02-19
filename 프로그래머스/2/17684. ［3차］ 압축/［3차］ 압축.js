function solution(msg) {
    var answer = [];
    
    const dictionary = {};
    let idx = 1;
    for(let i = 65; i < 65 + 26; i++) {
        dictionary[String.fromCharCode(i)] = idx++;
    }
    
    const msgArr = msg.split('');
    let msgsIdx = 0;
    let msgString = '';

    while(msgArr.length !== msgsIdx) {
        msgString = msgString.concat(msgArr[msgsIdx]);

        if(dictionary[msgString]) {
            msgsIdx++;
        } else {
            answer.push(dictionary[msgString.slice(0, msgString.length - 1)]);
            dictionary[msgString] = idx++;
            msgString = '';
        }

        if(msgArr.length === msgsIdx) {
            answer.push(dictionary[msgString]);
        }
    }
    
    return answer;
}