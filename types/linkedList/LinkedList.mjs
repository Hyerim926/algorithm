class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    insertAt(index, data) {
        if (index > this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다')
        }

        let newNode = new Node(data)

        // 가장 앞에 삽입하는 경우
        if (index === 0) {
            newNode.next = this.head;
            this.head = newNode
        } else {
            // 원하는 위치에 삽입하는 경우
            let currentNode = this.head;

            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            newNode.next = currentNode.next;
            currentNode.next = newNode
        }
        this.count++;
    }

    clear() {
        this.head = null;
        this.count = 0;
    }

    printAll() {
        let currentNode = this.head;
        let text = '[';

        while (currentNode !== null) {
            text += currentNode.data;
            currentNode = currentNode.next

            if (currentNode !== null) {
                text += ', ';
            }
        }

        text += ']';

        console.log(text);
    }

    insertLast(data) {
        this.insertAt(this.count, data);
    }

    deleteAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('제거할 수 없습니다')
        }

        let currentNode = this.head;

        // 첫번째 노드를 제거하는 상황
        if (index === 0) {
            let deleteNode = this.head;
            this.head = this.head.next;
            this.count--;
            return deleteNode;
        } else {
            // 나머지 노드를 제거하는 상황
            for (let i = 0; i < index - 1; i++) {
                currentNode = currentNode.next;
            }

            let deleteNode = currentNode.next;
            currentNode.next = currentNode.next.next;
            this.count--;
            return deleteNode;
        }
    }

    deleteLast() {
        return this.deleteAt(this.count - 1);
    }

    getNodeAt(index) {
        if (index >= this.count || index < 0) {
            throw new Error('범위를 넘어갔습니다');
        }

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

}

export { Node, LinkedList }
