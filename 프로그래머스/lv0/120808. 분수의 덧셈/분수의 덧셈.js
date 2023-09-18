function getGcd(a, b) {
    return a % b === 0 ? b : getGcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let boonmo = denom1 * denom2;
    let boonja = numer1 * denom2 + numer2 * denom1; 
    let gcd = getGcd(boonmo, boonja);
    
    answer = [boonja / gcd, boonmo / gcd]

    return answer;
}