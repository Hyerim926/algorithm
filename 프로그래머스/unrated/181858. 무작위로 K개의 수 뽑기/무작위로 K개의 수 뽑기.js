function solution(arr, k) {
    var answer = [...new Set(arr)]
    
    if(answer.length < k) {
        answer = [...answer, ...Array(k - answer.length).fill(-1)]
    } else if(answer.length > k) {
        answer = answer.slice(0, k)
    }

    return answer;
}