function solution(elements) {
    var answer = [];
    
    const extendArr = [...elements, ...elements];

    elements.forEach((one, idx) => {
        if(idx < elements.length) {
            for(let i = 0; i < elements.length; i++) {
                const slice = extendArr.slice(i, i + 1 + idx);
                answer.push(slice.reduce((acc, val) => acc + val, 0));
            }
        }
    })

    const set = new Set(answer);
    
    answer = [...set].length;

    return answer;
}