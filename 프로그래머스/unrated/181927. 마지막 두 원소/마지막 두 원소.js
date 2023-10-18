function solution(num_list) {
    var answer = num_list;
    const last = num_list[num_list.length - 1];
    const prev = num_list[num_list.length - 2];
    
    let add;
    if(last > prev) {
        add = last - prev;
    } else {
        add = last * 2;
    }
    
    answer.push(add);
    
    return answer;
}