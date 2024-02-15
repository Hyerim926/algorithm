function solution(record) {
    var answer = [];
    const newRecords = new Map();
    
    record.forEach((one) => {
        const temp = one.split(' ');
        if((temp[0] === 'Enter') || (temp[0] === 'Change')) {
               newRecords.set(temp[1],temp[2]);
        }
    });
    
    record.forEach((one) => {
        const temp = one.split(' ');
        let name= newRecords.get(temp[1]);
        if(temp[0] === 'Enter') {
            answer.push(`${name}님이 들어왔습니다.`);
        } else if(temp[0] === 'Leave') {
            answer.push(`${name}님이 나갔습니다.`);
        }
    })
    
    return answer;
}