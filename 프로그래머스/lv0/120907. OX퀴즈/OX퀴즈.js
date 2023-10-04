const calcStr = (str) => {
    const strList = str.split(' ');
    
    let calcResult = 0;
    
    for(let i = 0; i < strList.length; i++) {
        if(i === 0) {
            calcResult = Number(strList[i]);
        } else if(strList[i] === '+') {
            calcResult += Number(strList[i + 1]);
        } else if(strList[i] === '-') {
            calcResult -= Number(strList[i + 1]);
        }
    }
    
    return calcResult === +strList[strList.length - 1] ? 'O' : 'X';
}

function solution(quiz) {
    var answer = [];
    
    quiz.forEach((one) => {
        answer.push(calcStr(one));
    })
    return answer;
}