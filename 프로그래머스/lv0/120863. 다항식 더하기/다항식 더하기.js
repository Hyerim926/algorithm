function solution(polynomial) {
    var answer = '';

    const strArr = polynomial.split(' + ');
    
    console.log(strArr)
    
    let xNum = 0;
    let constNum = 0;
    strArr.forEach((str) => {
        if(str.includes('x')) {
            if(str.length > 1) {
                xNum += +str.split('x')[0]; // 계수 있는
            } else {
                xNum += 1; // 계수 없는
            }
        }
        
        if(!str.includes('x')) {
            constNum += +str;           
        }
    })
    
if(xNum !== 0 && constNum !== 0){
        return xNum === 1 ? `x + ${constNum}` : `${xNum}x + ${constNum}`;    
    }
    
    if(xNum !== 0 && constNum === 0){        
        return xNum === 1 ? "x" : `${xNum}x`;
    }
    
    if(xNum === 0 && constNum !== 0){
        return `${constNum}`;
    }
    
    if(xNum === 0 && constNum === 0){
        return "0";
    }
    
    return answer;
}