// 최대 공약수 구하기
function cal_gcd(a, b) {
    return a % b === 0 ? b : cal_gcd(b, a % b)
}

function cal_factor(n) {
  let result = [];
  let divisor = 2;
  
  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor)
      n = n / divisor;
    }
    
     else divisor ++;
    
  }
  
  return [...new Set(result)];
}

function solution(a, b) {
    var answer = 2;
    
    const gcd = cal_gcd(a, b);
    const simplifiedA = a / gcd;
    const simplifiedB = b / gcd;
    
    const primeFactor = [2, 5]
    let notPrimeFactor = cal_factor(simplifiedB)
    notPrimeFactor = notPrimeFactor.filter((one) => !primeFactor.includes(one));
    
    if(notPrimeFactor.length === 0 || 
       a % b === 0) {
        answer = 1;
    }
    
    return answer;
}