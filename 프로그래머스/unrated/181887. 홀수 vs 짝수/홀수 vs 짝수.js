function solution(num_list) {
    var answer = 0;
    let odd = 0;
    let even = 0;
    
    num_list.forEach((num, i) => {
        if(i % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }
    })
    
    answer = Math.max(even, odd);
    return answer;
}