function solution(priorities, location) {
    var answer = 0;
    
    const newPriorities = [...priorities];
    const dataset = priorities.map((priority,idx) => ({priority, idx}));

    while(dataset.length !== 0) {
        const maxValue = Math.max(...newPriorities);
        
        // 첫번째 요소 제거 및 검증
        const {priority, idx} = dataset.shift();
        if(priority >= maxValue) {
            answer++;
            newPriorities[idx] = 1;
            if(idx === location) {
                break;
            }
        } else {
            // maxValue보다 작으면 후순위로 push
            dataset.push({priority, idx});
        }
    }
    return answer
}