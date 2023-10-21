function solution(my_string, queries) {
    var answer = my_string;
    queries.forEach((query) => {
        let subStr = answer.substring(query[0], query[1] + 1);
        let reversed = subStr.split('').reverse().join('');
        let first = answer.slice(0, query[0]);
        let last = answer.slice(query[1] + 1, answer.length);
        
        answer = first + reversed + last;
    })
    return answer;
}