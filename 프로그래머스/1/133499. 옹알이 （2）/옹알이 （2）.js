function solution(babbling) {
    var answer = 0;
    const speakable = ['aya', 'ye', 'woo', 'ma'];

    for(let i = 0; i < babbling.length; i++) {
        let babble = babbling[i];
        
        for(let j = 0; j < speakable.length; j++) {
            if(babble.includes(speakable[j].repeat(2))) {
                break;
            }
            
            babble = babble.split(speakable[j]).join(" ");
        }
        
        if(babble.split(" ").join("").length === 0){
            answer += 1;
        }
    }
    return answer;
}