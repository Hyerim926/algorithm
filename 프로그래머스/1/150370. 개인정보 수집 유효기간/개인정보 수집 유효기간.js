function solution(today, terms, privacies) {
    today = new Date(today.replaceAll('.', '-')).getTime();
    
    var answer = [];
    const termObj = {};
    terms.forEach((term) => {
        let tempArr = term.split(' ');
        termObj[tempArr[0]] = tempArr[1]
    })
    
    privacies.forEach((p, i) => {
        const [date, type] = p.split(" ");
        let endDate = new Date(date.replaceAll('.', '-'));
        let term = termObj[type];
        endDate = endDate.setMonth(endDate.getMonth() + +term)
        if(today >= endDate) answer.push(i + 1);
    })
    
    return answer;
}