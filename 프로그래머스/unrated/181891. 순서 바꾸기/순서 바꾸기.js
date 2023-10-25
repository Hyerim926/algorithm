function solution(num_list, n) {
    var answer = [];
    const first = num_list.slice(0, n);
    const second = num_list.slice(n, num_list.length + 1);

    answer = [...second, ...first];
    return answer;
}