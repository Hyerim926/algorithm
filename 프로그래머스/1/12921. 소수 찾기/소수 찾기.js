const isPrime = (num) => {
    if(num <= 1) {
        return false;
    }

    if(num % 2 === 0) { 
        return num === 2 ? true : false;
    }
   
    const sqrt = parseInt(Math.sqrt(num));

    for(let divider = 3; divider <= sqrt; divider += 2) {
        if(num % divider === 0) {
            return false;
        }
    }
  
    return true;
}

function solution(n) {
    var answer = 0;
    for(let i = 1; i <= n; i++) {
        if(isPrime(i)) answer++;
    }
    return answer;
}
