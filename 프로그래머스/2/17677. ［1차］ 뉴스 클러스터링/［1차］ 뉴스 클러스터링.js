// 12:15
function solution(str1, str2) {
    var answer = 0;
    
    if(str1.toUpperCase() === str2.toUpperCase()) return 65536;
        
    const str1Obj = {};
    const str2Obj = {};
    
    const regEx = /^[A-Z]+$/; // 영문만 허용
    let temp;
    for(let i = 0; i < str1.length - 1; i++) {
        temp = (str1[i] + str1[i + 1]).toUpperCase();
        if(regEx.test(temp)) {
            if(!str1Obj[temp]) {
                str1Obj[temp] = 1;
            } else {
                str1Obj[temp]++;
            }
        }
    }
    
    for(let i = 0; i < str2.length - 1; i++) {
        temp = (str2[i] + str2[i + 1]).toUpperCase();
        if(regEx.test(temp)) {
            if(!str2Obj[temp]) {
                str2Obj[temp] = 1;
            } else {
                str2Obj[temp]++;
            }
        }
    }
    
    console.log(str1Obj, str2Obj)
    let union = 0;
    const gathering = {};
    
    Object.entries(str1Obj).forEach(([key, value]) => {
        if(!gathering[key]) {
            if(str1Obj[key] && str2Obj[key]) {
                gathering[key] = Math.max(str1Obj[key], str2Obj[key]);
                union += Math.min(str1Obj[key], str2Obj[key]);
            } else {
                gathering[key] = str1Obj[key];
            }
        }
    })

    Object.entries(str2Obj).forEach(([key, value]) => {
        if(!gathering[key]) {
            if(str1Obj[key] && str2Obj[key]) {
                gathering[key] = Math.max(str1Obj[key], str2Obj[key]);
                union += Math.min(str1Obj[key], str2Obj[key]);
            } else {
                gathering[key] = str2Obj[key];
            }
        }
    })
    
    console.log(gathering)

    const intersection = Object.values(gathering).reduce((acc, cur) => acc + cur, 0);
    
    answer = Math.floor(union / intersection * 65536);
    
    return answer;
}