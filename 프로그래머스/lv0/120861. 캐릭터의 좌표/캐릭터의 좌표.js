function solution(keyinput, board) {
    var answer = [];

    let x = 0;
    let y = 0;

    
    const xMax = board[0] / 2;
    const yMax = board[1] / 2;
    
    keyinput.forEach((direction) => {
        if(direction === 'right' && x + 1 < xMax) {
            x++;
        }
        if(direction === 'left' && x - 1 > -xMax) {
            x--;
        }
        if(direction === 'up' && y + 1 < yMax) {
            y++;
        }
        if(direction === 'down' && y - 1 > -yMax) {
            y--;          
        }
    })
    
    answer = [x, y];
    return answer;
}