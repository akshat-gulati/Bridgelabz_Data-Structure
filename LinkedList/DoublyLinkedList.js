class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the list
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }

    // Remove a node from the list
    remove(data) {
        if (!this.head) return;

        let current = this.head;
        while (current) {
            if (current.data === data) {
                if (current === this.head) {
                    this.head = current.next;
                    if (this.head) this.head.prev = null;
                } else if (current === this.tail) {
                    this.tail = current.prev;
                    if (this.tail) this.tail.next = null;
                } else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    // Insert at a specific position
    insertAtPosition(pos, newData) {
        let newNode = new Node(newData);
        if (pos === 1) {
            newNode.next = this.head;
            if (this.head !== null) {
                this.head.prev = newNode;
            }
            this.head = newNode;
            if (this.size === 0) {
                this.tail = newNode;
            }
            this.size++;
            return;
        }
        let curr = this.head;
        for (let i = 1; i < pos - 1 && curr !== null; ++i) {
            curr = curr.next;
        }
        if (curr === null) {
            console.log("Position is out of bounds.");
            return;
        }
        newNode.prev = curr;
        newNode.next = curr.next;
        curr.next = newNode;
        if (newNode.next !== null) {
            newNode.next.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.size++;
    }

    // Delete at a specific index
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let current = this.head;
        if (index === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            } else {
                this.tail = null;
            }
        } else if (index === this.size - 1) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        this.size--;
        return current.data;
    }

    // Find middle element
    middleElement() {
        if (this.size === 0) {
            return null;
        }
        let slow = this.head;
        let fast = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.data;
    }

    // Delete middle element
    deleteMiddleElement() {
        if (this.size === 0) {
            return null;
        }
        let middleIndex = Math.floor(this.size / 2);
        return this.deleteAtIndex(middleIndex);
    }

    // Remove duplicates
    removeDuplicates() {
        if (this.size <= 1) {
            return;
        }
        let current = this.head;
        let seen = new Set();
        while (current !== null) {
            if (seen.has(current.data)) {
                let next = current.next;
                if (current.prev) {
                    current.prev.next = current.next;
                }
                if (current.next) {
                    current.next.prev = current.prev;
                }
                if (current === this.head) {
                    this.head = current.next;
                }
                if (current === this.tail) {
                    this.tail = current.prev;
                }
                this.size--;
                current = next;
            } else {
                seen.add(current.data);
                current = current.next;
            }
        }
    }
}

// Example usage
const dll = new DoublyLinkedList();
for (let i = 1; i <= 10; i++) {
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    dll.add(randomNum);
}

dll.insertAtPosition(2, 400);

// Print the list to verify insertion
dll.printList();