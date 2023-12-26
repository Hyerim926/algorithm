function solution(phone_book) {
    var answer = true;
    phone_book.sort();
    
    let seeking;
    for(let i = 0; i < phone_book.length - 1; i++) {
        seeking = phone_book[i];
        if(phone_book[i + 1].startsWith(seeking)) return false;
    }
    
    return answer;
}