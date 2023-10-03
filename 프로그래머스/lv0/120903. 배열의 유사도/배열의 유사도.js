function solution(s1, s2) {
    var answer = 0;
    const filtered = s1.filter((one) => s2.includes(one));
    
    answer = filtered.length;
    return answer;
}