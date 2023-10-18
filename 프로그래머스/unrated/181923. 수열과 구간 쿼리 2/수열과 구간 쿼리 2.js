function solution(arr, queries) {
    var answer = [];
    
    queries.forEach((query) => {
        let list = arr.slice(query[0], query[1] + 1)
                      .filter((num) => num > query[query.length - 1]);
        
        if(list.length > 0) {
            let min = Math.min(...list);
        
            answer.push(min);            
        } else {
            answer.push(-1);
        }
    })
    return answer;
}