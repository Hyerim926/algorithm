function solution(age) {
    var answer = '';
    
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const ageArr = age.toString().split('');
    
    ageArr.forEach((one) => {
        answer += alpha[one];
    })

    return answer;
}