function solution(participant, completion) {
    var answer = '';
    const status = {};
    
    participant.forEach((one) => {
        if(!status[one]) {
            status[one] = 1;
        } else {
            status[one]++;
        }
    });
    
    completion.forEach((one) => {
        if(status[one]) {
            status[one]--;
        }
    });
    
    answer = Object.keys(status).find(key => status[key] === 1);
    return answer;
}