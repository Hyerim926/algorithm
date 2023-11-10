function solution(num_list) {
    var answer = num_list.sort((a, b) => a - b).slice(5, num_list.length)
    return answer;
}