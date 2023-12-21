function solution(progresses, speeds) {
    var answer = [];
    const leftDays = [];
    
    for (let i = 0; i < progresses.length; i++) {
        leftDays.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let now = leftDays[0];
    let dDay = 0;
    for (let i = 0; i < leftDays.length; i++) {
        if (now >= leftDays[i]) {
            dDay++;
        } else {
            answer.push(dDay);
            dDay = 1;
            now = leftDays[i];
        }
    }
    
    if(dDay) {
        answer.push(dDay)
    }
    
    return answer;
}