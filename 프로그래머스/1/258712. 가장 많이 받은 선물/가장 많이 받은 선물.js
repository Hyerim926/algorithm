function solution(friends, gifts) {
    var answer = 0;
    
    const give = {};
    const receive = {};
    
    
    friends.forEach((person1) => {
        give[person1] = { giveCnt : 0, receiveCnt : 0 , sendLog: {} };
        receive[person1] = 0;
        friends.forEach((person2) => give[person1].sendLog[person2] = 0);
    });
    
    gifts.forEach((one) => {
        const [sender, receiver] = one.split(' ');
        give[sender].giveCnt++;
        give[receiver].receiveCnt++;
        give[sender].sendLog[receiver]++;
    });
    
    for(let i = 0; i < friends.length; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const p1 = friends[i];
            const p2 = friends[j];

            const p1GiveCnt = give[p1].sendLog[p2];
            const p2GiveCnt = give[p2].sendLog[p1];

            let takePerson;
            if(p1GiveCnt > p2GiveCnt) {
                takePerson = p1;
            } else if(p1GiveCnt < p2GiveCnt) {
                takePerson = p2;
            } else {
                const p1GiftScore = give[p1].giveCnt - give[p1].receiveCnt;
                const p2GiftScore = give[p2].giveCnt - give[p2].receiveCnt;

                if(p1GiftScore === p2GiftScore) {
                    continue;
                } else if(p1GiftScore > p2GiftScore) {
                    takePerson = p1;
                } else {
                    takePerson = p2;
                }
            }

            if(takePerson) receive[takePerson]++;
        }
      }

    answer = Math.max(...Object.values(receive));
        
    return answer;
}