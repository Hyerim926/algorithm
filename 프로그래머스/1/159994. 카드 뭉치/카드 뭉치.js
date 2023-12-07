function solution(cards1, cards2, goal) {
    var answer = '';
    const rest1 = goal.filter((word) => cards1.includes(word));
    const rest2 = goal.filter((word) => cards2.includes(word));
    
    let isSameFirst = true;
    let isSameSecond = true;
    rest1.forEach((one, i) => {
        if(one !== cards1[i]) {
            return isSameFirst = false;
        }
    })
    
    rest2.forEach((one, i) => {
        if(one !== cards2[i]) {
            return isSameSecond = false;
        }
    })
    
    answer = isSameFirst && isSameSecond ? 'Yes' : 'No';
    
    return answer;
}