enum Color {
    RED,
    BLACK,
}

class Node {
    key: number;
    color: Color;
    left: Node | null;
    right: Node | null;
    parent: Node | null;

    constructor(key: number, color: Color) {
        this.key = key;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    // Insert a new node into the tree
    insert(key: number) {
        const newNode = new Node(key, Color.RED);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

        this.fixTreeAfterInsert(newNode);
    }

    // Helper method to insert a node recursively
    insertNode(root: Node, newNode: Node) {
        if (newNode.key < root.key) {
            if (root.left === null) {
                root.left = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
                newNode.parent = root;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    // Fix the tree after inserting a new node
    fixTreeAfterInsert(node: Node) {
        while (node !== this.root && node.color === Color.RED && node.parent?.color === Color.RED) {
            const parent = node.parent;
            const grandparent = parent?.parent;

            if (parent === grandparent?.left) {
                const uncle = grandparent.right;

                if (uncle?.color === Color.RED) {
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.right) {
                        this.rotateLeft(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    this.rotateRight(grandparent);
                }
            } else {
                const uncle = grandparent.left;

                if (uncle?.color === Color.RED) {
                    parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    node = grandparent;
                } else {
                    if (node === parent.left) {
                        this.rotateRight(parent);
                        node = parent;
                        parent = node.parent;
                    }

                    parent.color = Color.BLACK;
                    grandparent.color = Color.RED;
                    this.rotateLeft(grandparent);
                }
            }
        }

        this.root?.color = Color.BLACK;
    }

    // Rotate the tree left around a given node
    rotateLeft(node: Node) {
        const rightChild = node.right;

        if (rightChild !== null) {
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
    }

    // Rotate the tree right around a given node
    rotateRight(node: Node) {
        const leftChild = node.left;

        if (leftChild !== null) {
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
}