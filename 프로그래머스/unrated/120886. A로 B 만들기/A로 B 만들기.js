function solution(before, after) {
    for(let i = 0; i < before.length; i++) {
        after = after.replace(before[i], '');
    }
    
    return after.length === 0 ? 1 : 0;
}