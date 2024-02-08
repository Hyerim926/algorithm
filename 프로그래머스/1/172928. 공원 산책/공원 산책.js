function solution(park, routes) {
    var answer = [];
    
    const direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    
    const startX = park.findIndex(one => one.includes('S'));
    const startY = park[startX].indexOf('S');
    answer = [startX, startY];
    
    const limitX = park.length - 1;
    const limitY = park[0].length - 1;
    
    routes.forEach((route) => {
        let [op, n] = route.split(' ');
        let [nx, ny] = [answer[0], answer[1]];
        let isTrue = true;

        for (let i = 0; i < Number(n); i++) {
            nx += direction[op][0];
            ny += direction[op][1];

            if (nx < 0 || nx > limitX 
                || ny < 0 || ny > limitY 
                || park[nx][ny] === 'X') 
            {
                isTrue = false;
                break;
            }
        }

        if (isTrue) {
            answer = [nx, ny];
        }
    });
    
    return answer;
}