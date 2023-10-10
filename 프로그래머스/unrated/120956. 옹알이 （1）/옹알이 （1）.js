function solution(babbling) {
    var answer = 0;

    const replaced = babbling;
    for(let i = 0; i < replaced.length; i++) {
        replaced[i] = replaced[i].replace('aya', '-');
        replaced[i] = replaced[i].replace('ye', '-');
        replaced[i] = replaced[i].replace('woo', '-');
        replaced[i] = replaced[i].replace('ma', '-');
        
        replaced[i] = replaced[i].replaceAll('-', '');
    }

    answer = replaced.filter((one) => one.length === 0).length;

    return answer;
}