function solution(n)
{
    var answer = 0;
    
    answer = n.toString()
        .split('')
        .map((num) => +num)
        .reduce((acc, cur) => acc + cur, 0)

    return answer;
}