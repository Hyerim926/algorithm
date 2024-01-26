function countingSort(arr) {
    const max = Math.max(...numbers);
    const indexArr = Array.from({ length: max + 1 }, () => 0);

    for (let i = 0; i < numbers.length; i++) {
        indexArr[numbers[i]]++;
    }

    let idx = 0;
    for (let i = 0; i <= max; i++) {
        while (indexArr[i] > 0) {
            numbers[idx++] = i;
            indexArr[i]--;
        }
    }
}

const numbers = [4, 4, 3, 5, 1, 2, 0, 8, 3, 6];

countingSort(numbers);
console.log(numbers);