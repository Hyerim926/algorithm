function solution(keymap, targets) {
    var answer = [];
    
    const keyCount = {};
    const newKeymap = keymap.map((key) => [...key.split('')]);
    
    let keys;
    for(let i = 0; i < keymap.length; i++) {
        keys = keymap[i];
        let key;
        for(let j = 0; j < keys.length; j++) {
            key = keys[j];
            if(!keyCount[key]) {
                keyCount[key] = j + 1;
            } else if(keyCount[key] > j + 1) {
                keyCount[key] = j + 1;
            }
        }
    }
    
    const newTargets = targets.map((target) => [...target.split('')]);
    let word;
    
    for(let i = 0; i < newTargets.length; i++) {
        word = newTargets[i];
        let newTarget;
        let count = 0;
        for(let j = 0; j < word.length; j++) {
            newTarget = word[j];
            if(keyCount[newTarget]) {
                count += keyCount[newTarget];
            } else {
                count = -1;
                break;
            }
        }
        answer.push(count);
    }

    return answer;
}