class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
        this.color = "red";
    }
}

class RedBlackTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            this.root.color = "black";
            return;
        }

        let currentNode = this.root;
        let parentNode = null;

        while (currentNode !== null) {
            parentNode = currentNode;

            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        newNode.parent = parentNode;

        if (value < parentNode.value) {
            parentNode.left = newNode;
        } else {
            parentNode.right = newNode;
        }

        this.fixTreeAfterInsert(newNode);
    }

    // Fix the tree after insertion
    fixTreeAfterInsert(node) {
        while (node !== this.root && node.parent.color === "red") {
            let uncle;

            if (node.parent === node.parent.parent.left) {
                uncle = node.parent.parent.right;

                if (uncle !== null && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }

                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateRight(node.parent.parent);
                }
            } else {
                uncle = node.parent.parent.left;

                if (uncle !== null && uncle.color === "red") {
                    node.parent.color = "black";
                    uncle.color = "black";
                    node.parent.parent.color = "red";
                    node = node.parent.parent;
                } else {
                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }

                    node.parent.color = "black";
                    node.parent.parent.color = "red";
                    this.rotateLeft(node.parent.parent);
                }
            }
        }

        this.root.color = "black";
    }

    // Rotate the tree left
    rotateLeft(node) {
        const rightChild = node.right;
        node.right = rightChild.left;

        if (rightChild.left !== null) {
            rightChild.left.parent = node;
        }

        rightChild.parent = node.parent;

        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        rightChild.left = node;
        node.parent = rightChild;
    }

    // Rotate the tree right
    rotateRight(node) {
        const leftChild = node.left;
        node.left = leftChild.right;

        if (leftChild.right !== null) {
            leftChild.right.parent = node;
        }

        leftChild.parent = node.parent;

        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        leftChild.right = node;
        node.parent = leftChild;
    }
}