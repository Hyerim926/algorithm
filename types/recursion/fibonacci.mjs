function Fibonacci1(n) {
    if (n === 0 || n === 1) return n;
    return Fibonacci1(n - 2) + Fibonacci1(n - 1);
}

function Fibonacci2(n, memo) {
    if (n === 0 || n === 1) return n;

    if (!memo[n]) {
        memo[n] = Fibonacci2(n - 2, memo) + Fibonacci2(n - 1, memo);
    }

    return memo[n];
}

function Fibonacci3(n) {
    if (n <= 1) return n;

    let table = [0, 1];

    for (let i = 2; i <= n; i++) {
        table[i] = table[i - 2] + table[i - 1]
    }

    return table[n]

}

let start = new Date();
console.log(Fibonacci1(40));
let end = new Date();
console.log(`Fibonacci1 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(Fibonacci2(40, {}));
end = new Date();
console.log(`Fibonacci2 함수 실행시간: ${end - start}ms`);

start = new Date();
console.log(Fibonacci3(40));
end = new Date();
console.log(`Fibonacci3 함수 실행시간: ${end - start}ms`);