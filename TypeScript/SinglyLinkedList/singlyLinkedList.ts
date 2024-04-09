class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    append(data: T): void {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data: T): void {
        const newNode = new Node(data);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    delete(data: T): void {
        if (this.isEmpty()) {
            return;
        }

        if (this.head!.data === data) {
            this.head = this.head!.next;
            if (this.head === null) {
                this.tail = null;
            }
            return;
        }

        let currentNode = this.head;
        while (currentNode!.next !== null) {
            if (currentNode!.next.data === data) {
                currentNode!.next = currentNode!.next.next;
                if (currentNode!.next === null) {
                    this.tail = currentNode;
                }
                return;
            }
            currentNode = currentNode!.next;
        }
    }

    print(): void {
        if (this.isEmpty()) {
            console.log("The linked list is empty.");
            return;
        }

        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}