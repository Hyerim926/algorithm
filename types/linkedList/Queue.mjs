import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class Queue {
    constructor() {
        this.list = new DoublyLinkedList();
    }

    enqueue(data) {
        this.list.insertAt(0, data);
    }

    // 마지막 요소를 제거해주기만 하면 됨
    dequeue() {
        try {
            return this.list.deleteLast();
        } catch (e) {
            return null;
        }
    }

    front() {
        return this.list.tail;
    }

    isEmpty() {
        return (this.list.count === 0);
    }
}

export { Queue }