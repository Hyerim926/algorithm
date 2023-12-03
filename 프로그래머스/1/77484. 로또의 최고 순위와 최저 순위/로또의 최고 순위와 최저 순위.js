function solution(lottos, win_nums) {
    var answer = [];
    
    const rank = {
        6: 1,
        5: 2,
        4: 3,
        3: 4,
        2: 5,
        1: 6,
        0: 6
    };
    
    const rest = lottos.filter((one) => win_nums.includes(one));
    const lost = lottos.filter((one) => one === 0);
    
    // 모두 맞춘 경우
    if(rest.length === win_nums.length) {
        answer = [1, 1];
    } else {
        const max = rest.length + lost.length;
        const min = rest.length;
        answer = [rank[max], rank[min]]
    }
    
    return answer;
}