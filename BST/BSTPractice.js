const {BinarySearchTree,Node} = require('./BSTImplementation');
let bst = new BinarySearchTree();

bst.insert(15);
bst.insert(25);
bst.insert(10);
bst.insert(7);
bst.insert(22);
bst.insert(17);
bst.insert(13);

// ------------------------------------------------------
function isBST(node, min = null, max = null) {
    if (node === null) {
        return true;
    }

    if ((min !== null && node.data <= min) || (max !== null && node.value >= max)) {
        return false;
    }

    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
}
// console.log(isBST(bst.getRootNode()));

// ------------------------------------------------------

function countNodesInRange(node, low, high) {
    if (node === null) {
        return 0;
    }

    if (node.data >= low && node.data <= high) {
        return 1 + countNodesInRange(node.left, low, high) + countNodesInRange(node.right, low, high);
    } else if (node.data < low) {
        return countNodesInRange(node.right, low, high);
    } else {
        return countNodesInRange(node.left, low, high);
    }
}
// console.log(countNodesInRange(bst.getRootNode(), 10, 22));

// ------------------------------------------------------

// console.log(bst.search(bst.getRootNode(), 10));

// ------------------------------------------------------

function findLCA(root, n1, n2) {
    // Base case
    if (root === null) {
        return null;
    }

    if (root.data < n1 && root.data < n2) {
        return findLCA(root.right, n1, n2);
    }

    if (root.data > n1 && root.data > n2) {
        return findLCA(root.left, n1, n2);
    }


    return root;
}

console.log("LCA of 7 and 13:", findLCA(bst.getRootNode(), 7, 13)?.data);

