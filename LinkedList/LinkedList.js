class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(val) {
        const newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    remove(val) {
        if (!this.head) return null;

        if (this.head.val === val) {
            this.head = this.head.next;
            this.size--;
            return;
        }

        let current = this.head;
        let previous = null;
        while (current && current.val !== val) {
            previous = current;
            current = current.next;
        }

        if (current) {
            previous.next = current.next;
            this.size--;
        }
    }

    print() {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
}

module.exports = {LinkedList,Node};