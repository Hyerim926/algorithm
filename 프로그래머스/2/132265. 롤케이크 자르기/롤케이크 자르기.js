function solution(topping) {
    var answer = 0;
    
    const topping1 = {};
    const topping2 = {};
    
    let topping1Count = 0;
    let topping2Count = 0;

    topping.forEach((one) => {
        if(!topping2[one]) {
            topping2[one] = 1;
            topping2Count++;
        } else {
            topping2[one]++;
        }
    })

    topping.forEach((one) => {
        if(topping2[one] - 1 === 0) {
            topping2Count--;
            delete topping2[one];
        } else {
            topping2[one]--;
        }

        if(!topping1[one]) {
            topping1Count++;
            topping1[one] = 1
        } else {
            topping1[one]++;
        }
        
        if(topping1Count === topping2Count) {
            answer++;
        }
    })
    
    return answer;
}