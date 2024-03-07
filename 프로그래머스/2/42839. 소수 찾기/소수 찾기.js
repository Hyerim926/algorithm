const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((one) => [one]); 

    arr.forEach((fixed, index, origin) => {
        const rest = [...origin.slice(0, index), ...origin.slice(index + 1)] ;

        const permutations = getPermutations(rest, selectNumber - 1); 

        const attached = permutations.map((one) => [fixed, ...one]); 
        
        results.push(...attached); 
    });

    return results;
}

const isPrime = (num) => {
    if(num <= 1) {
        return false;
    }

    if( num % 2 === 0) { 
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

function solution(numbers) {
    var answer = 0;
    const numArr = numbers.split('');
    
    let ableNums = [];
    for(let i = 1; i <= numbers.length; i++) {
        ableNums.push(...getPermutations(numArr, i))
    }
    
    ableNums = new Set(ableNums.map(arr => Number(arr.join(''))));
    ableNums = [...ableNums];

    ableNums.forEach(num => {
        if(isPrime(num)) answer++;
    })

    return answer;
}