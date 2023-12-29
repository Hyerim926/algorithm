function solution(cacheSize, cities) {
    var answer = 0;
    const cache = [];
    
    let lowerCase;
    for(let i = 0; i < cities.length; i++) {
        lowerCase = cities[i].toLowerCase();
        if(cache.includes(lowerCase)) {
            answer += 1;
        } else {
            answer += 5;
        }
        
        if(cacheSize > 0) {
            if(cache.includes(lowerCase)) {
                cache.splice(cache.indexOf(lowerCase), 1);
            } else if(cache.length === cacheSize) {
                cache.shift();
            }
            cache.push(lowerCase);
        }
    }
    
    return answer;
}