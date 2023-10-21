function QuickSort(arr, left, right) {
    if (left <= right) {
        let pivot = Divide(arr, left, right);
        QuickSort(arr, left, pivot - 1);
        QuickSort(arr, pivot + 1, right);
    }
}

function Divide(arr, left, right) {
    let pivot = arr[left];
    let leftStartIndex = left + 1;
    let righStartIndex = right;

    while (leftStartIndex <= righStartIndex) {
        while (leftStartIndex <= right && pivot >= arr[leftStartIndex]) {
            leftStartIndex++;
        }

        while (righStartIndex >= (left + 1) && pivot <= arr[righStartIndex]) {
            righStartIndex--;
        }

        // 서로 지나치지 않았을 경우에 서로의 위치를 바꿔줌
        if (leftStartIndex <= righStartIndex) {
            Swap(arr, leftStartIndex, righStartIndex);
        }
    }

    Swap(arr, left, righStartIndex);
    return righStartIndex;
}

function Swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

let arr = [3, 5, 7, 2, 6, 4, 9, 1, 8];

console.log('===== 정렬 전 =====');
console.log(arr);

QuickSort(arr, 0, arr.length - 1);

console.log('===== 정렬 후 =====');
console.log(arr);
