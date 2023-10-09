function solution(lines) {
    var answer = 0;
    
    // 선분의 최대/최소 길이를 구하기 위한 작업
    const min = Math.min(...lines.flat())
    const max = Math.max(...lines.flat())
    const array = [...Array(max - min)].fill(0)     
    
    // 배열을 순회하며 array에 선분 그리기
    lines.forEach(one => {
        for(let i = one[0]; i < one[1]; i++){
            array[i - min] += 1;
        }
    })
    
    answer = array.reduce((a, c)=> c > 1 ? a + 1 : a , 0)
    return answer;
}