const calculateDistance = (startRowIdx, startColIdx, targetRowIdx, targetColIdx) => {
        const rowDistance = Math.abs(startRowIdx - targetRowIdx);
        const colDistance = Math.abs(startColIdx - targetColIdx);

        return rowDistance + colDistance;
};

function solution(numbers, hand) {
    var answer = '';
    
    const keypad = {
        1 : [0,0],
        2 : [0,1],
        3 : [0,2],
        4 : [1,0],
        5 : [1,1],
        6 : [1,2],
        7 : [2,0],
        8 : [2,1],
        9 : [2,2],
        0 : [3,1],
    };
    
    let leftRowIdx = 3, leftColIdx = 0, rightRowIdx = 3, rightColIdx = 2;

    numbers.forEach((num) => {
        const [numRowIdx, numColIdx] = keypad[num];

        if(num === 1 || num === 4 || num === 7) {
            leftRowIdx = numRowIdx;
            leftColIdx = numColIdx;

            answer += 'L';
            return
        }

        if(num === 3 || num === 6 || num === 9) {
            rightRowIdx = numRowIdx;
            rightColIdx = numColIdx;

            answer += 'R';
            return 
        }

        const leftDistance = 
              calculateDistance(leftRowIdx, leftColIdx, numRowIdx, numColIdx);
        const rightDistance = 
              calculateDistance(rightRowIdx, rightColIdx, numRowIdx, numColIdx);

        if(leftDistance < rightDistance) {
            leftRowIdx = numRowIdx;
            leftColIdx = numColIdx;

            answer += 'L';
        } else if(leftDistance > rightDistance) {
            rightRowIdx = numRowIdx;
            rightColIdx = numColIdx;

            answer += 'R';
        } else {
            if(hand === 'left') {
                leftRowIdx = numRowIdx;
                leftColIdx = numColIdx;

                answer += 'L';
            } else if(hand === 'right') {
                rightRowIdx = numRowIdx;
                rightColIdx = numColIdx;

                answer += 'R';
            }
        }
    })

    return answer
}