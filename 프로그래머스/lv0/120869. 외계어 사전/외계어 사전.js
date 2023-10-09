function solution(spell, dic) {
    var answer = 0;
    
    let count = 0;
    dic.forEach((oneDic) => {
        let usedSpell = [];
        spell.forEach((oneSpell) => {
            let regExp = new RegExp(oneSpell, 'g')
            if(oneDic.match(regExp)) {
                usedSpell.push(oneSpell);
            }
        })

        if(usedSpell.length === spell.length) {
            count++;
        }
    })
    
    answer = count > 0 ? 1 : 2;
    return answer;
}