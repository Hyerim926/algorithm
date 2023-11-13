function solution(n) {
    const answer = Array.from(Array(n), () => Array(n).fill(0));
    
    let num = 1;
    let row = 0;
    let col = 0;
    
    for (let i = n; i > 0; i -= 2) {
        for (let j = 0; j < i; j++) {
            answer[row][col] = num++;
            col++;
        }
        col--;
        row++;
    
        for (let j = 0; j < i - 1; j++) {
            answer[row][col] = num++;
            row++;
        }
        row--;
        col--;
    
        for (let j = 0; j < i - 1; j++) {
            answer[row][col] = num++;
            col--;
        }
        col++;
        row--;
    
        for (let j = 0; j < i - 2; j++) {
            answer[row][col] = num++;
            row--;
        }
        row++;
        col++;
    }
    return answer;
}