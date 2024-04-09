class Node<T> {
    public value: T;
    public next: Node<T> | null;
    public prev: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;
    private size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    public isEmpty(): boolean {
        return this.size === 0;
    }

    public getSize(): number {
        return this.size;
    }

    public add(value: T): void {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail!.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    public remove(value: T): void {
        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                if (currentNode.prev !== null) {
                    currentNode.prev.next = currentNode.next;
                } else {
                    this.head = currentNode.next;
                }

                if (currentNode.next !== null) {
                    currentNode.next.prev = currentNode.prev;
                } else {
                    this.tail = currentNode.prev;
                }

                this.size--;
                break;
            }

            currentNode = currentNode.next;
        }
    }

    public print(): void {
        let currentNode = this.head;
        let result = '';

        while (currentNode !== null) {
            result += `${currentNode.value} `;
            currentNode = currentNode.next;
        }

        console.log(result.trim());
    }
}