import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

// 해시 테이블의 데이터를 표현해주는 클래스
class HashData {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor() {
        this.arr = [];
        for (let i = 0; i < 10; i++) {
            // 각 인덱스마다 빈 연결리스트로 초기화해줌
            this.arr[i] = new DoublyLinkedList();
        }
    }

    // 해시 함수
    hashFunction(number) {
        return number % 10;
    }

    // 해시함수를 거쳐 배열의 인덱스를 결정하면 그 인덱스의 연결리스트에 삽입함
    set(key, value) {
        this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
    }

    get(key) {
        // 1. 해시함수로 배열의 인덱스를 찾고
        // 2. 해당 인덱스에 있는 리스트의 헤드를 현재 노드로 가리킴
        let currentNode = this.arr[this.hashFunction(key)].head;

        // 리스트가 비어있지 않은 경우를 처리하기 위해
        // 리스트를 차례대로 순회하면서 해당 데이터의 key가 get()함수의 인자로 받은 key와 같은지 비교 & 리턴

        // 리스트의 끝일 때까지 반복
        while (currentNode !== null) {
            if (currentNode.data.key === key) {
                return currentNode.data.value;
            }
            currentNode = currentNode.next;
        }
        return null;
    }

    remove(key) {
        // get과 동일하게
        let list = this.arr[this.hashFunction(key)];
        let currentNode = list.head;
        let deletedIndex = 0;
        while (currentNode !== null) {
            if (currentNode.data.key === key) {
                return list.deleteAt(deletedIndex);
            }
            currentNode = currentNode.next;
            deletedIndex++;
        }
        return null;
    }
}

export { HashTable }