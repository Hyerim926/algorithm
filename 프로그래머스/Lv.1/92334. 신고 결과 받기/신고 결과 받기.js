function solution(id_list, report, k) {
    var answer = [];
    let setReport = new Set(report);
    setReport = [...setReport];
    
    const reported = {};
    const mailResult = {};
    let target;
    let did;
    setReport.forEach((one) => {
        did = one.split(' ')[0];
        target = one.split(' ')[1];
        mailResult[did] = 0;
        if(!reported[target]) {
            reported[target] = 1;
        } else {
            reported[target]++;
        }
    })

    setReport.forEach((one) => {
        did = one.split(' ')[0];
        target = one.split(' ')[1];
        
        if(reported[target] >= k) mailResult[did]++;
    })
    
    id_list.forEach((id) => {
        if(mailResult[id]) {
            answer.push(mailResult[id]);
        } else {
            answer.push(0);
        }
    })
    
    return answer;
}