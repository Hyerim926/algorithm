function solution(s) {
    var answer = '';
    
    const wordArr = [];
    s.split(' ').forEach((word) => {
        let newWord = '';
        
        if(word.length === 0) {
            newWord = newWord;
        } else if(word[0].match(/[A-Za-z]/)) {
            newWord += word[0].toUpperCase();
            newWord += word.substring(1, word.length).toLowerCase();
        } else {
            newWord = word.toLowerCase();
        }
        wordArr.push(newWord);
    })
    
    answer = wordArr.join(' ');

    return answer;
}