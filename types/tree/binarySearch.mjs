/* 
arr   : 배열
target: 찾는 값
start : 배열의 시작 인덱스
end   : 배열의 끝 인덱스
*/
function binarySearch(arr, target, start, end) {
    // 기저 조건: 배열을 반으로 쪼개다가 더이상 쪼갤 것이 없을 때
    if (start > end) {
        return null;
    }

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (target > arr[mid]) {
        // 중간인덱스의 값보다 찾는 값이 더 커서 중간 인덱스의 오른쪽 값을 범위로 함
        return binarySearch(arr, target, mid + 1, end);
    } else {
        // 중간인덱스의 값보다 찾는 값이 더 작아 중간 인덱스의 왼쪽 값을 범위로 함
        return binarySearch(arr, target, start, mid - 1);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = binarySearch(arr, 3, 0, arr.length - 1);

console.log(`index : ${index}`);
console.log(`value : ${arr[index]}`);