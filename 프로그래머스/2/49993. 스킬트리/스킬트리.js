function solution(skill, skill_trees) {
    var answer = 0;
        
    const regExp = new RegExp(`[^${skill}]`, 'g');
    
    const extract = skill_trees.map((one) => one.replace(regExp, ''));
    
    extract.forEach((one) => {
        if(skill.startsWith(one)) answer++;
    })
    
    return answer;
}