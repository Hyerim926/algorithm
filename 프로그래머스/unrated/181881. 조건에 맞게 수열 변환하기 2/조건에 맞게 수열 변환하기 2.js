const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const makeNewArr = (arr) => {
    const result = [];
    
    arr.forEach((one) => {
        if(one >= 50 && one % 2 === 0) {
            result.push(one / 2);
        } else if(one < 50 && one % 2 !== 0) {
            result.push(one * 2 + 1);
        } else {
            result.push(one);
        }
    })
    
    return result;
}

function solution(arr) {
    var answer = 0;
    
    let preArr = arr;
    let newArr = makeNewArr(arr);
    
    while(!equals(preArr, newArr)) {
        preArr = newArr;
        newArr = makeNewArr(preArr);
        
        answer++;
    }
    
    return answer;
}