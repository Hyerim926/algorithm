function solution(num_list) {
    var answer = 0;
    
    if(num_list.length >= 11) {
        answer = num_list.reduce((acc, cur) => acc + cur, 0);
    } else {
        answer = 1;
        num_list.forEach((num) => answer *= num); 
    }
    return answer;
}