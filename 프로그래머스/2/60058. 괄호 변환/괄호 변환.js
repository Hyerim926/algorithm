const balancedString = (string) => {
    const stack = [];
    let leftWrapCount=0;
    let rightWrapCount=0;
    
    for(let i = 0; i < string.length; i++) {
        if(string[i] === '(') {
            stack.push('(');
            leftWrapCount++;
        } else {
            stack.push(')');
            rightWrapCount++;
        }

        if(leftWrapCount === rightWrapCount) break;
    }

    return [stack.join(''),string.slice(stack.length)];
}

const isCorrectString = (string) => {
    const stack = [];
    for(let i = 0; i < string.length; i++) {
        if(stack[stack.length - 1] ==='(' && string[i] === ')') {
            stack.pop();
        } else {
            stack.push(string[i]);
        }
    }
    return stack.length === 0;
}

const process = (string) => {
    if(string === '') {
        return '';
    }

    const [u,v] = balancedString(string);

    if(isCorrectString(u)) {
        const result = u + process(v);
        return result;
    } else {
        const convertU = (u) => {
            return u.substr(1, u.length - 2).split('').map(v => v=== ')' ? '(' :')').join('');
        }
        const result = '('.concat(process(v)).concat(')') + convertU(u);
        return result;
    }
}

function solution(p) {
    const answer = process(p);
    return answer;
}