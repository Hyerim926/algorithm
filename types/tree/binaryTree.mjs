class BinaryTree {
    constructor(data, leftTree = null, rightTree = null) {
        this.data = data;
        this.leftSubTree = leftTree;
        this.rightSubTree = rightTree;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        this.data = data;
    }

    getLeftSubTree() {
        return this.leftSubTree;
    }

    getRightSubTree() {
        return this.rightSubTree;
    }

    setLeftSubTree(tree) {
        this.leftSubTree = tree;
    }

    setRightSubTree(tree) {
        this.rightSubTree = tree;
    }

    preOrderTraversal(tree) {
        // 기저 조건 == 노드가 없을 때
        if (tree === null) return;

        // 루트 노드 먼저 출력
        console.log(tree.data);
        // 재귀로 왼쪽 노드 방문
        this.preOrderTraversal(tree.getLeftSubTree());
        // 재귀로 오른쪽 노드 방문
        this.preOrderTraversal(tree.getRightSubTree());
    }

    inOrderTraversal(tree) {
        if (tree === null) return;

        // 왼쪽 노드 방문
        this.inOrderTraversal(tree.getLeftSubTree());
        // 루트 노드 출력
        console.log(tree.data);
        // 오른쪽 노드 방문
        this.inOrderTraversal(tree.getRightSubTree());
    }

    postOrderTraversal(tree) {
        if (tree === null) return;

        // 왼쪽 노드 방문
        this.inOrderTraversal(tree.getLeftSubTree());
        // 오른쪽 노드 방문
        this.inOrderTraversal(tree.getRightSubTree());
        // 루트 노드 출력
        console.log(tree.data);
    }

    // 왼쪽 자식 노드 제거 함수
    removeLeftSubTree() {
        let deletingNode = this.getLeftSubTree();
        this.setLeftSubTree(null);
        return deletingNode;
    }

    // 오른쪽 자식 노드 제거 함수
    removeRightSubTree() {
        let deletingNode = this.getRightSubTree();
        this.setRightSubTree(null);
        return deletingNode;
    }
}

export { BinaryTree };