function solution(food) {
    var answer = '';

    const left = [];
    for(let i = 1; i < food.length; i++){
        for(let j = 0; j < parseInt(food[i] / 2); j++) {
            left.push(i);
        }
    }
    
    answer = left.join('') + '0' + left.reverse().join('')
    
    return answer;
}