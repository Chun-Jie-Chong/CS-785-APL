class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper function to get the height of a node
    getHeight(node) {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    // Helper function to update the height of a node
    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Helper function to get the balance factor of a node
    getBalanceFactor(node) {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    // Helper function to perform left rotation
    leftRotate(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Helper function to perform right rotation
    rightRotate(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Helper function to balance the tree
    balance(node) {
        if (this.getBalanceFactor(node) > 1) {
            if (this.getBalanceFactor(node.left) < 0) {
                node.left = this.leftRotate(node.left);
            }
            return this.rightRotate(node);
        }
        if (this.getBalanceFactor(node) < -1) {
            if (this.getBalanceFactor(node.right) > 0) {
                node.right = this.rightRotate(node.right);
            }
            return this.leftRotate(node);
        }
        return node;
    }

    // Insert a value into the AVL tree
    insert(value) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node, value) {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else {
            node.right = this.insertNode(node.right, value);
        }

        this.updateHeight(node);
        return this.balance(node);
    }

    // Perform an in-order traversal of the AVL tree
    inOrderTraversal() {
        this.inOrderTraversalHelper(this.root);
    }

    inOrderTraversalHelper(node) {
        if (node !== null) {
            this.inOrderTraversalHelper(node.left);
            console.log(node.value);
            this.inOrderTraversalHelper(node.right);
        }
    }
}

// Usage example
const avlTree = new AVLTree();
avlTree.insert(10);
avlTree.insert(20);
avlTree.insert(30);
avlTree.insert(40);
avlTree.insert(50);

avlTree.inOrderTraversal();