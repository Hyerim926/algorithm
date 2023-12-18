function solution(clothes) {
    var answer = 1;
    
    const closet = {};
    for(let i = 0; i < clothes.length; i++) {
        if(!closet[clothes[i][1]]) {
            closet[clothes[i][1]] = [clothes[i][0]];
        } else {
            closet[clothes[i][1]].push(clothes[i][0])
        }
    }

    for (let [key, value] of Object.entries(closet)) {
        answer *= (closet[key].length + 1);
    }

    answer -= 1;
    
    return answer;
}