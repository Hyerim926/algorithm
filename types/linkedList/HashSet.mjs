import { HashTable } from "./HashTable.mjs";

class HashSet {
    constructor() {
        this.hashTable = new HashTable();
    }

    add(data) {
        // 중복을 체크하므로 해당 데이터가 없을 때만 set
        if (this.hashTable.get(data) === null) {
            this.hashTable.set(data, -1); // key값만 사용하므로 value는 고정값
        }
    }

    isContain(data) {
        // 찾는 데이터가 있을 때 true, 없을 때 false
        return this.hashTable.get(data) !== null;
    }

    remove(data) {
        this.hashTable.remove(data);
    }

    // 해시테이블에 있는 모든 배열의 리스트를 초기화해주면 됨
    clear() {
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            this.hashTable.arr[i].clear();
        }
    }

    isEmpty() {
        let empty = true;
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            // 데이터가 하나라도 있으면 비어있지 않다는 의미
            if (this.hashTable.arr[i].count > 0) {
                empty = false;
                break;
            }
        }

        return empty;
    }

    printAll() {
        for (let i = 0; i < this.hashTable.arr.length; i++) {
            let currentNode = this.hashTable.arr[i].head;
            // 데이터가 있을 때까지
            while (currentNode !== null) {
                console.log(currentNode.data.key);
                currentNode = currentNode.next;
            }
        }
    }
}

export { HashSet }