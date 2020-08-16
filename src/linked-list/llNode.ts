export class LinkedListNode<T> {
    private value: T;
    private next: LinkedListNode<T> | null;
    private previous: LinkedListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }

    public getValue(): T {
        return this.value;
    }
    public setValue(value: T): void {
        this.value = value;
    }

    public getNext(): LinkedListNode<T> | null {
        return this.next;
    }
    public setNext(nextNode: LinkedListNode<T> | null): void {
        this.next = nextNode;
    }

    public getPrevious(): LinkedListNode<T> | null {
        return this.previous;
    }
    public setPrevious(previousNode: LinkedListNode<T> | null): void {
        this.previous = previousNode;
    }

}