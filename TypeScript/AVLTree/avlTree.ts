class Node {
    value: number;
    left: Node | null;
    right: Node | null;
    height: number;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

class AVLTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    getHeight(node: Node | null): number {
        if (node === null) {
            return 0;
        }
        return node.height;
    }

    getBalanceFactor(node: Node | null): number {
        if (node === null) {
            return 0;
        }
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    updateHeight(node: Node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    rotateRight(z: Node): Node {
        const y = z.left!;
        const T3 = y.right;

        y.right = z;
        z.left = T3;

        this.updateHeight(z);
        this.updateHeight(y);

        return y;
    }

    rotateLeft(z: Node): Node {
        const y = z.right!;
        const T2 = y.left;

        y.left = z;
        z.right = T2;

        this.updateHeight(z);
        this.updateHeight(y);

        return y;
    }

    insert(value: number) {
        this.root = this.insertNode(this.root, value);
    }

    insertNode(node: Node | null, value: number): Node {
        if (node === null) {
            return new Node(value);
        }

        if (value < node.value) {
            node.left = this.insertNode(node.left, value);
        } else if (value > node.value) {
            node.right = this.insertNode(node.right, value);
        } else {
            // Duplicate values are not allowed in AVL tree
            return node;
        }

        this.updateHeight(node);

        const balanceFactor = this.getBalanceFactor(node);

        // Left Left Case
        if (balanceFactor > 1 && value < node.left!.value) {
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balanceFactor < -1 && value > node.right!.value) {
            return this.rotateLeft(node);
        }

        // Left Right Case
        if (balanceFactor > 1 && value > node.left!.value) {
            node.left = this.rotateLeft(node.left!);
            return this.rotateRight(node);
        }

        // Right Left Case
        if (balanceFactor < -1 && value < node.right!.value) {
            node.right = this.rotateRight(node.right!);
            return this.rotateLeft(node);
        }

        return node;
    }

    // Other methods like delete, search, etc. can be implemented here
}