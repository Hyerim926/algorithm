import { BinaryTree } from "./binaryTree.mjs";

class BinarySearchTree {
    constructor(rootNode = null) {
        this.root = rootNode;
    }

    insert(data) {
        // 데이터가 없어 노드를 처음 삽입해주어야할 때
        if (this.root === null) {
            this.root = new BinaryTree(data);
            return;
        }

        // 데이터가 하나 이상인 경우
        let currentNode = this.root;
        let parentNode = null;

        while (currentNode !== null) {
            parentNode = currentNode;

            // 삽입하려는 데이터가 currentNode보다 작다면 왼쪽 노드를 currentNode로 설정해줌
            if (currentNode.getData() > data) {
                currentNode = currentNode.getLeftSubTree();
            } else if (currentNode.getData() < data) {
                // 크다면 오른쪽 노드를 currentNode로 설정해줌
                currentNode = currentNode.getRightSubTree();
            } else {
                // 같은 값이라면 이진 탐색 트리는 중복을 허용하지 않으므로 삽입 진행 없이 함수 종료
                return;
            }
        }

        // parentNode가 새로 삽입할 데이터를 자식으로 가리키기만 하면 끝
        let newNode = new BinaryTree(data);

        // data가 parentNode보다 작다면 왼쪽 노드에
        if (parentNode.getData() > data) {
            parentNode.setLeftSubTree(newNode);
        } else {
            // 그 반대라면 오른쪽 노드에 위치
            parentNode.setRightSubTree(newNode);
        }
    }

    search(targetData) {
        let currentNode = this.root;

        // 부모와 연결할 필요는 없음

        while (currentNode !== null) {
            if (currentNode.getData() === targetData) {
                return currentNode;
            } else if (currentNode.getData() > targetData) {
                currentNode = currentNode.getLeftSubTree();
            } else {
                currentNode = currentNode.getRightSubTree();
            }
        }

        return null;
    }
}

let binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(18);
binarySearchTree.insert(15);
binarySearchTree.insert(10);
binarySearchTree.insert(6);
binarySearchTree.insert(3);
binarySearchTree.insert(8);
binarySearchTree.insert(12);
binarySearchTree.insert(11);
binarySearchTree.insert(31);
binarySearchTree.insert(27);
binarySearchTree.insert(24);
binarySearchTree.insert(20);
binarySearchTree.insert(33);
binarySearchTree.insert(35);
binarySearchTree.insert(37);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);

console.log('======= Search 6 =======');
console.log(binarySearchTree.search(6));

console.log('======= Search 1 =======');
console.log(binarySearchTree.search(1));