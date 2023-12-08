const getNumOfDivisor = (number) => {
    let result = 0;
    for(let i = 1; i < Math.sqrt(number); i++) {
        if(number % i === 0) result++;
    }
    return result * 2 + Number.isInteger(Math.sqrt(number));
}

function solution(number, limit, power) {
    var answer = 0;
    
    const weapons = [];
    for(let i = 1; i <= number; i++) {
        let divisors = getNumOfDivisor(i);
        if(divisors <= limit) {
            weapons.push(divisors);
        } else {
            weapons.push(power);
        }
    }
    
    answer = weapons.reduce((acc, cur) => acc + cur, 0)
    return answer;
}