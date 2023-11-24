function solution(price, money, count) {
    var answer = -1;
    
    let fee = 0;
    for(let i = 1; i <= count; i++) {
        fee += i * price;
    }
    
    answer = fee > money ? fee - money : 0;

    return answer;
}