function solution(n, arr1, arr2) {
    var answer = [];
    
    for(let i = 0; i < arr1.length; i++) {
        const strLine = (arr1[i] | arr2[i]).toString(2)
        const arrLine = strLine.padStart(n, '0')
        const decLine = arrLine.replaceAll("0", " ").replaceAll("1", "#")
        answer.push(decLine)
    }
    console.log(answer)
    return answer;
}