const compare = (a, b) => {
    let answer;
    if(a > b) {
        answer = 1;
    } else if(a < b) {
        answer = -1;
    } else if(a === b) {
        answer = 0;
    }
    
    return answer;
}

function solution(arr1, arr2) {
    var answer = compare(arr1.length, arr2.length);
    
    if(answer === 0) {
        const sum1 = arr1.reduce((a, b) => a + b);
        const sum2 = arr2.reduce((a, b) => a + b);
        answer = compare(sum1, sum2);
    }
    
    return answer;
}