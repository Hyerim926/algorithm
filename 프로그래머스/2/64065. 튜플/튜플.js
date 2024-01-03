function solution(s) {
    var answer = [];
    
    const tuples = s.split(/{|}/)
    .filter(Boolean)
    .filter((one) => one !== ',')
    .map((one) => one.split(','))
    .sort((a, b) => a.length - b.length);
    
    let num;
    for(let i = 0; i < tuples.length; i++) {
        num = tuples[i].filter((one) => !answer.includes(one));
        answer.push(num[0]);
    }
    
    answer = answer.map((one) => +one);
    return answer;
}