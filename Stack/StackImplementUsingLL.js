class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(element) {
        const newNode = new Node(element);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const poppedData = this.head.data;
        this.head = this.head.next;
        this.size--;
        return poppedData;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.data;
    }

    isEmpty() {
        return this.head === null;
    }

    getSize() {
        return this.size;
    }
}

// Usage example:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // 3
console.log(stack.peek()); // 2
console.log(stack.getSize()); // 2