const isEqualObj = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
 
  if (keys1.length !== keys2.length) {
    return false;
  }
 
  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
 
  return true;
}

function solution(want, number, discount) {
    var answer = 0;
    const wantObj = {};
    for(let i = 0; i < want.length; i++) {
        wantObj[want[i]] = number[i];
    }
    
    const days = number.reduce((acc, cur) => acc + cur, 0);
    let howLong;
    let notInclude;
    
    for(let i = 0; i < discount.length; i++) {
        if(i + days <= discount.length) {
            howLong = discount.slice(i, i + days);
            let discountObj = {};
            for(let j = 0; j < howLong.length; j++) {
                if(!discountObj[howLong[j]]) {
                    discountObj[howLong[j]] = 1;
                } else {
                    discountObj[howLong[j]]++;
                }
            }
            if(isEqualObj(wantObj, discountObj)) answer++;
        }
    }
    
    return answer;
}