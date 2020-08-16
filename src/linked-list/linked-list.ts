import { LinkedListNode } from "./llNode";

interface List<T> {
    head: LinkedListNode<T>;
    tail: LinkedListNode<T>;
    size: number;
}

const OUT_OF_BOUNDS_ERROR = new Error("Index out of bound error");

class LinkedList<T> implements Iterable<T> {

    private list: List<T> | null;

    constructor() {
        this.list = null;
    }

    size(): number {
        if (this.list)
            return this.list.size
        else
            return 0;
    }

    isEmpty(): boolean {
        return this.list === null || this.list.size === 0
    }


    [Symbol.iterator](): Iterator<T, any, undefined> {
        throw new Error("Method not implemented.");
    }

    addFront(value: T) {
        const node = new LinkedListNode<T>(value);

        if (this.list === null) {
            this.list = {} as List<T>;
            this.list.head = node;
            this.list.tail = node;
            this.list.size = 1;
        } else {
            this.list.head.setPrevious(node);
            node.setNext(this.list.head);
            node.setPrevious(null);
            this.list.head = node;
            this.list.size++;
        }
    }

    addBack(value: T) {
        const node = new LinkedListNode<T>(value);

        if (this.list === null) {
            this.list = {} as List<T>;
            this.list.head = node;
            this.list.tail = node;
            this.list.size = 1;
        } else {
            this.list.tail.setNext(node);
            node.setPrevious(this.list.tail);
            this.list.tail = node;
            this.list.size++;
        }
    }

    addAt(value: T, index: number) : void {
        if (index === 0) {
            this.addFront(value);
        }
        else if (index === this.size()) {
            this.addBack(value);
        }
        if (this.list === null || index < 0 || index > this.size()) {
            throw OUT_OF_BOUNDS_ERROR;
        }

        let currentNode = this.list.head;
        for (let j = 0; j < index - 1; j++) {
            currentNode = currentNode.getNext()!
        }

        // insert here
        const newNode = new LinkedListNode<T>(value);
        newNode.setNext(currentNode.getNext());
        currentNode.getNext()?.setPrevious(newNode);
        newNode.setPrevious(currentNode);
        currentNode.setNext(newNode);
        this.list.size++;

    }

}