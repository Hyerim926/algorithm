function InsertionSort(arr) {
    // i가 1부터 시작하는 이유는 첫번째 요소는 이미 정렬되어있다고 가정하기 때문
    for (let i = 1; i < arr.length; i++) {
        let insertingData = arr[i];
        let j;
        for (j = i - 1; j >= 0; j--) {
            if (arr[i] > insertingData) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = insertingData;
    }
}

let arr = [4, 1, 5, 3, 6, 2];

console.log('==== 정렬 전 ====');
console.log(arr);

InsertionSort(arr);

console.log('==== 정렬 후 ====');
console.log(arr);
