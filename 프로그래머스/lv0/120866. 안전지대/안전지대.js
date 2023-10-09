function solution(board) {
    var answer = 0;
    
    // 지뢰 좌표가 [0, 0]이라고 했을 때 주변 위험 지역 세팅하기
    const dangerZone = [
        [-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]
    ]
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            // 지뢰가 있을 때
            if(board[i][j] === 1) {
                dangerZone.map((d) => {
                    let [x, y] = d;
                    // 주변 위험 지역을 현 좌표에 맞게 설정
                    [x, y] = [x + i, y + j];
                    
                    if (x >= 0 &&
                        x < board.length &&
                        y >= 0 &&
                        y < board[i].length &&
                        board[x][y] === 0) { // 위험지역이 겹치는 경우를 대비
                        board[x][y] = 2;                
                    }
                })                        
            }
        }
    }
    
    board.map(v1 => v1.map(v2 => v2 === 0 ? answer++ : 0));
    
    return answer;
}