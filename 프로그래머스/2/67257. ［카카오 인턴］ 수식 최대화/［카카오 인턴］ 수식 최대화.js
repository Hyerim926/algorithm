const calculate = (type, strArr) => {
    switch(type) {
        case '+':
            return strArr.reduce((acc, val) => acc + Number(val), 0);
        case '-':
            return strArr.reduce((acc, val) => acc - Number(val), 0) + strArr[0] * 2;
        case '*':
            return strArr.reduce((acc, val) => acc * Number(val), 1);
        default:
            return [];
    } 
}

function solution(expression) {
    var answer = 0;
    const cases = ['+*-','+-*','-*+','-+*','*-+','*+-'];
    let maxValue = -Infinity;
    
    cases.forEach((types) => {
        const [third, second, first] = types.split('');
        const splitCase = expression.split(third).map(str => str.split(second).map(str => str.split(first)));
        const result = calculate(third, splitCase.map((str) => calculate(second, str.map((str) => calculate(first, str)))));
        maxValue = Math.max(maxValue, Math.abs(result)) ;
    })
    
    answer = maxValue;
    
    return answer;
}