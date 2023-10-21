// leftIndex와 rightIndex는 재귀로 호출할 떄 필요한 매개변수
function MergeSort(arr, leftIndex, rightIndex) {
    // 배열의 원소가 1개(leftIndex === rightIndex)일 때까지 분할하기 위함 (기저조건)
    if (leftIndex < rightIndex) {
        let midIndex = parseInt((leftIndex + rightIndex) / 2);
        MergeSort(arr, leftIndex, midIndex);
        MergeSort(arr, midIndex + 1, rightIndex);
        Merge(arr, leftIndex, midIndex, rightIndex);
    }
}

function Merge(arr, leftIndex, midIndex, rightIndex) {
    let leftAreaIndex = leftIndex;
    let righAreaIndex = midIndex + 1;

    let tempArr = [];
    tempArr.length = rightIndex + 1;
    tempArr.fill(0, 0, rightIndex + 1);

    let tempArrIndex = leftIndex;

    while (leftAreaIndex <= midIndex && righAreaIndex <= rightIndex) {
        if (arr[leftAreaIndex] <= arr[righAreaIndex]) {
            tempArr[tempArrIndex] = arr[leftAreaIndex++];
        } else {
            tempArr[tempArrIndex] = arr[righAreaIndex++];
        }
        tempArrIndex++;
    }

    if (leftAreaIndex > midIndex) {
        for (let i = righAreaIndex; i <= rightIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
    } else {
        for (let i = leftAreaIndex; i <= midIndex; i++) {
            tempArr[tempArrIndex++] = arr[i];
        }
    }

    for (let i = leftIndex; i <= rightIndex; i++) {
        arr[i] = tempArr[i];
    }
}

let arr = [3, 5, 2, 4, 1, 7, 8, 9];

console.log('===== 정렬 전 =====');
console.log(arr);

MergeSort(arr, 0, arr.length - 1);

console.log('===== 정렬 후 =====');
console.log(arr);


