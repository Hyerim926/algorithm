function solution(fees, records) {
    var answer = [];
    
    let temp;
    const rObj = {};
    records.forEach((record) => {
        temp = record.split(' ');
        if(!rObj[temp[1]]) rObj[temp[1]] = [];
        rObj[temp[1]].push(temp[0]);
    })
    
    const tempDate = '2024/01/01';
    let parkingTime = 0;
    let inTime;
    let outTime;
    for (let key in rObj) {
        if(rObj[key].length % 2 !== 0) {
            rObj[key].push('23:59');
        }
        let fee = fees[1];
        for(let i = 0; i < rObj[key].length - 1;) {
            inTime = new Date(`${tempDate} ${rObj[key][i]}`);
            outTime = new Date(`${tempDate} ${rObj[key][i + 1]}`);
            parkingTime += Math.abs(outTime - inTime);
            i = i + 2;
        }
        parkingTime = Math.floor((parkingTime / 1000) / 60);
        if(parkingTime > fees[0]) {
            fee += Math.ceil((parkingTime - fees[0]) / fees[2]) * fees[3];
        }
        answer.push([key, fee]);
    }
    
    answer = answer.sort((a, b) => +a[0] - b[0]).map((one) => one[1]);
    
    return answer;
}