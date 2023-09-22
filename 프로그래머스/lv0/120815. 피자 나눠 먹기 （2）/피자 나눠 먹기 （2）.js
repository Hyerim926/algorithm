function solution(n) {
    var answer = 0;
    let pieces = 0;
    
    let isBaesu = false;
    let i = 1;
    while(!isBaesu) {
        pieces = n * i;
        isBaesu = pieces % 6 === 0;
        i++;
    }
    
    answer = pieces / 6;
    return answer;
}