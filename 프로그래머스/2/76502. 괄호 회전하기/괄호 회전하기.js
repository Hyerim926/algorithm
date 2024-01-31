const isCorrectString = (strArr) => {
    const strSet = {
        ']': '[',
        ')': '(',
        '}': '{',
    };
    
    const stack = [];
    let isCorrect = true;
    
    strArr.forEach((str) => {
        if(str === '(' || str === '{' || str === '[' ) {
            stack.push(str);
        } else {
            if(strSet[str] === stack.at(-1)) {
              stack.pop();
            } else {
              isCorrect = false;
            }
        }
    })
    return stack.length === 0 && isCorrect;
}

function solution(s) {
    let answer = 0;
    
    for(let i = 0; i < s.length; i++) {
        const changedS = [...s.slice(i, s.length), ...s.slice(0,i)];
        const isCorrect = isCorrectString(changedS);
        answer += (isCorrect);
    }

    return answer
}