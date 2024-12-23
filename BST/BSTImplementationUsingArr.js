class BinarySearchTree {
    constructor() {
        this.tree = [];
    }

    // Helper methods for index calculations
    getLeftChildIndex(parentIndex) {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex) {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    // Insert a value into the BST
    insert(value) {
        if (this.tree.length === 0) {
            this.tree[0] = value;
            return;
        }

        let currentIndex = 0;
        while (true) {
            if (value < this.tree[currentIndex]) {
                let leftIndex = this.getLeftChildIndex(currentIndex);
                if (this.tree[leftIndex] === undefined) {
                    this.tree[leftIndex] = value;
                    break;
                }
                currentIndex = leftIndex;
            } else {
                let rightIndex = this.getRightChildIndex(currentIndex);
                if (this.tree[rightIndex] === undefined) {
                    this.tree[rightIndex] = value;
                    break;
                }
                currentIndex = rightIndex;
            }
        }
    }

    // Traverse the tree in-order
    inorderTraversal(index = 0) {
        if (this.tree[index] === undefined) return [];
        
        return [
            ...this.inorderTraversal(this.getLeftChildIndex(index)),
            this.tree[index],
            ...this.inorderTraversal(this.getRightChildIndex(index))
        ];
    }

    // Search for a value in the BST
    search(value) {
        let currentIndex = 0;
        
        while (currentIndex < this.tree.length && this.tree[currentIndex] !== undefined) {
            if (this.tree[currentIndex] === value) {
                return true;
            }
            
            if (value < this.tree[currentIndex]) {
                currentIndex = this.getLeftChildIndex(currentIndex);
            } else {
                currentIndex = this.getRightChildIndex(currentIndex);
            }
        }
        
        return false;
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log("Inorder traversal:", bst.inorderTraversal());
console.log("Search for 7:", bst.search(7));
console.log("Search for 9:", bst.search(9));