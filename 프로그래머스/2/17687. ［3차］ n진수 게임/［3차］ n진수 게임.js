function solution(n, t, m, p) {
    var answer = '';
    
    let targetString = '';
    let number = 0;
    
    while(t * m > targetString.length) {
        targetString = targetString.concat(number.toString(n));
        number++;
    }

    targetString  = targetString.slice(0,t * m);

    answer = targetString.split('').filter((num, i) => {
        return ((i - p + 1) % m) === 0;
    }).join('').toUpperCase();

    return answer;
}