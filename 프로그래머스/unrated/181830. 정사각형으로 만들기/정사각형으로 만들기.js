function solution(arr) {
    var answer = [[]];
    const row = arr.length;
    const col = arr[0].length;
    
    const n = row > col ? row : col;

    if(row > col) {
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < row - col; j++) {
                arr[i].push(0);                
            }
            answer = arr;
        }
    } else if(row < col) {
        const newArr = Array.from(new Array(col - row), () => new Array(col).fill(0));
        answer = [...arr, ...newArr];
    } else {
        answer = arr;
    }

    return answer;
}