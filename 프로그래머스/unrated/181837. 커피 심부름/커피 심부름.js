function solution(order) {
    var answer = 0;
    order.forEach((menu) => {
        if(menu.includes('latte')) {
            answer += 5000;
        } else if(menu.includes('americano')) {
            answer += 4500;
        } else if(menu === 'anything') {
            answer += 4500;
        }
    })
    return answer;
}