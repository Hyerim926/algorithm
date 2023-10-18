function solution(num_list) {
    var answer = 0;
    let even = '';
    let odd = '';
    
    num_list.forEach((num) => {
        if(num % 2 === 0) {
            even += String(num);
        } else {
            odd += String(num);
        }
    })
    
    answer = +even + +odd;
    return answer;
}