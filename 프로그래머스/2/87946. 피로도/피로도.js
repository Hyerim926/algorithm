const getPermutations = function (arr, selectNum) {
    const results = [];
    
    if (selectNum === 1) return arr.map((one) => [one]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const permutations = getPermutations(rest, selectNum - 1); 
      const attached = permutations.map((one) => [fixed, ...one]); 
      results.push(...attached); 
    });

    return results;
}

function solution(k, dungeons) {
    var answer = 0;
    
    const dungeonsLength = dungeons.length;
    const permutations = getPermutations(Array(dungeonsLength).fill(0).map((_,idx) => idx), dungeonsLength);
    
    permutations.forEach((permutation) => {
        let energy = k;
        let dungeonsCount = 0;
        for(let i = 0; i < permutation.length; i++) {
            const dungeonsIdx = permutation[i];
            if(energy >= dungeons[dungeonsIdx][0]) {
                energy -= dungeons[dungeonsIdx][1];
            } else {
                break;
            }
            dungeonsCount++;
        }
        answer = Math.max(answer, dungeonsCount);
    })

    return answer
} 