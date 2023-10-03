import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Deque {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    // 이중연결리스트의 printAll 함수를 호출해주면 끝
    printAll() {
        return this.list.printAll();
    }

    addFirst(data) {
        // O(1) 성능으로 헤드에 삽입
        this.list.insertAt(0, data)
    }

    removeFirst() {
        return this.list.deleteAt(0);
    }

    addLast(data) {
        // 삽입 인덱스를 마지막 카운트로 넣어주면 마지막 원소에 삽입을 뜻함
        this.list.insertAt(this.list.count, data);
    }

    removeLast() {
        return this.list.deleteLast();
    }

    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Deque }