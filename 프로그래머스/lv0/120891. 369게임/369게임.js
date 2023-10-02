function solution(order) {
    var answer = 0;
    const orders = String(order).split('');
    const clap = [3, 6, 9];
    for(let i = 0; i < orders.length; i++) {
        if(clap.includes(Number(orders[i]))) {
            answer++;
        }
    }
    return answer;
}