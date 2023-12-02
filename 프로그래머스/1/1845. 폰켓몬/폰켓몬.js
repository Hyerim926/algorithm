function solution(nums) {
    var answer = 0;
    const monsters = {};
    
    for(let i = 0; i < nums.length; i++) {
        if(!monsters[nums[i]]) {
            monsters[nums[i]] = 1;
        } else {
            monsters[nums[i]]++;
        }
    }
    
    const myMonsters = parseInt(nums.length / 2);
    const monsterType = Object.keys(monsters).length;
    
    answer = monsterType <= myMonsters ? monsterType : myMonsters; 
    return answer;
}