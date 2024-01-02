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

    remove(targetData) {
        // root 노드를 제거할 때 사용하기 위한 변수
        let fakeParentRootNode = new BinaryTree(0);
        let parentNode = fakeParentRootNode;
        let currentNode = this.root;
        let deletingNode = null;

        // fakeParentNode는 왼쪽이나 오른쪽 중 아무거나 설정해도 상관 없음
        fakeParentRootNode.setRightSubTree(this.root);

        while (currentNode !== null && currentNode.getData() !== targetData) {
            parentNode = currentNode;

            if (currentNode.getData() > targetData) {
                currentNode = currentNode.getLeftSubTree();
            } else {
                currentNode = currentNode.getRightSubTree();
            }
        }

        // 제거할 노드가 없다면 함수 종료
        if (currentNode === null) {
            return;
        }

        deletingNode = currentNode;
        // 1. 자식노드가 하나도 없는 터미널 노드를 제거하는 경우
        if (deletingNode.getLeftSubTree() === null && deletingNode.getRightSubTree() === null) {
            if (parentNode.getLeftSubTree === deletingNode) {
                parentNode.removeLeftSubTree();
            } else {
                parentNode.removeRightSubTree();
            }
        }

        // 2. 자식노드가 한 개인 노드를 제거하는 경우
        else if (deletingNode.getLeftSubTree() === null || deletingNode.getRightSubTree() === null) {
            let deletingNodeChild;

            // 제거할 노드에 왼쪽 자식이 있는 경우
            if (deletingNode.getLeftSubTree() !== null) {
                deletingNodeChild = deletingNode.getLeftSubTree();
            } else {
                // 제거할 노드에 오른쪽 자식이 있는 경우
                deletingNodeChild = deletingNode.getRightSubTree();
            }

            // 부모노드의 왼쪽 자식노드가 제거할 노드라면 부모노드의 왼쪽 자식노드로 제거할 노드의 자식노드를 연결해줌
            if (parentNode.getLeftSubTree() === deletingNode) {
                parentNode.setLeftSubTree(deletingNodeChild);
            } else {
                // 부모노드의 오른쪽 자식노드가 제거할 노드라면 부모노드의 오른쪽 자식노드로 제거할 노드의 자식노드를 연결해줌
                parentNode.setRightSubTree(deletingNodeChild);
            }
        }

        // 3. 자식노드가 두 개인 노드를 제거하는 경우
        else {
            let replacingNode = deletingNode.getLeftSubTree();
            let replacingNodeParent = deletingNode;

            while (replacingNode.getRightSubTree() !== null) {
                replacingNodeParent = replacingNode;
                replacingNode = replacingNode.getRightSubTree();
            }

            let deletingNodeData = deletingNode.getData();
            deletingNode.setData(replacingNode.getData());

            // 대체노드의 왼쪽 자식노드가 대체할 노드라면 왼쪽 자식노드를 대체노드의 왼쪽 자식노드로 설정
            if (replacingNodeParent.getLeftSubTree() === replacingNode) {
                replacingNodeParent.setLeftSubTree(replacingNode.getLeftSubTree());
            } else {
                replacingNodeParent.setRightSubTree(replacingNode.getLeftSubTree()); // 왼쪽 자식노드만 신경써주면 됨
            }

            deletingNode = replacingNode;
            deletingNode.setData(deletingNodeData);
        }

        // 루트노드가 변경되었을 경우
        if (fakeParentRootNode.getRightSubTree() !== this.root) {
            this.root = fakeParentRootNode.getRightSubTree();
        }

        return deletingNode;
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

binarySearchTree.remove(10);
binarySearchTree.root.inOrderTraversal(binarySearchTree.root);