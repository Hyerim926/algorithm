function solution(players, callings) {
    var answer = [];
    
    let ranks = {};

    players.forEach((one, i)=> {
        ranks[one] = i;
    })

    for(let i = 0; i < callings.length; i++) {
        let playerIdx = ranks[callings[i]];

        if(playerIdx > 0 && playerIdx != undefined) {
            let temp = players[playerIdx - 1];
            players[playerIdx - 1] = players[playerIdx];
            players[playerIdx] = temp;
            
            ranks[players[playerIdx - 1]] = playerIdx - 1;
            ranks[players[playerIdx]] = playerIdx;
        }
    }

    answer = players;
    return answer;
}