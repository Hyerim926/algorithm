function solution(maps) {
    var answer = -1;
    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];
    
    const stack = [{rowIdx: 0, colIdx: 0, tried: 1}];
    
    const maxRow = maps.length;
    const maxCol = maps[0].length;
    
    while(stack.length !== 0) {
        // 스택의 마지막 요소 가지고 옴
        const {rowIdx, colIdx, tried} = stack.pop();
        
        for(let i = 0; i < 4; i++) {
            const newRowIdx = rowIdx + dx[i];
            const newColIdx = colIdx + dy[i];
            
            // 도달하면 종료
            if(rowIdx === maxRow - 1 && colIdx === maxCol - 1) {
                answer = tried;
                return answer;
            }
            
            // 방문 처리
            if(newRowIdx >= 0
              && newRowIdx < maxRow
              && newColIdx >= 0
              && newColIdx < maxCol
              && maps[newRowIdx][newColIdx] === 1) {
                maps[newRowIdx][newColIdx] = 0;
                stack.unshift({rowIdx: newRowIdx, colIdx: newColIdx, tried: tried + 1});
            }
        }
    }

    return answer;
}