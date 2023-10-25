function solution(n, slicer, num_list) {
    var answer = [];
    const a = slicer[0];
    const b = slicer[1];
    const c = slicer[2];
    
    if(n === 1) {
        for(let i = 0; i <= b; i++) {
            answer.push(num_list[i]);
        }
    }
    
    if(n === 2) {
        for(let i = a; i < num_list.length; i++) {
            answer.push(num_list[i]);
        }
    }
    
    if(n === 3) {
        for(let i = a; i <= b; i++) {
            answer.push(num_list[i]);
        }
    }
    
    if(n === 4) {
        let idx = 0;
        for(let i = a; i <= b; i++) {
            if(idx % 2 === 0) {
                answer.push(num_list[i]);
            }
            idx++;
        }
        
    }
    return answer;
}