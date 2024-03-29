function solution(number, k) {
    var answer = '';
    
    let stack = [];

    let arr = number.split('').reverse();

    while(arr.length && k > 0) {
        stack.push(arr.pop());
        while(stack[stack.length - 1] < arr[arr.length - 1] && k > 0) {
            stack.pop();
            k -= 1;
        }
    }

    if(k !== 0) stack = stack.slice(0, -k);

    answer = stack.join('') + arr.reverse().join('');
    return answer;
}