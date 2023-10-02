function solution(array) {
    var answer = 0;
    const obj = {};
    
    array.forEach((one) => {
        if(!obj[one]) {
            obj[one] = 0;
        }
        
        obj[one]++;
    })

    const valueArray = Object.values(obj);
    const max = Math.max(...valueArray);

    valueArray.forEach((one) => {
        if(valueArray.indexOf(max) !== valueArray.lastIndexOf(max)) {
            answer = -1;
        } else {
            answer = +Object.keys(obj).find(key => obj[key] === max);
        }
    })

    
    return answer;
}