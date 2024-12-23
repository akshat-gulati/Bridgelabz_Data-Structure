class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // --------------------------------------------------------------------------------------
  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  }

  // --------------------------------------------------------------------------------------

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }

  removeNode(node, key) {
    if (node === null) return null;

    if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      let minNode = this.findMinNode(node.right);
      node.data = minNode.data;
      node.right = this.removeNode(node.right, minNode.data);
      return node;
    }
  }

  // --------------------------------------------------------------------------------------

  findMinNode(node) {
    if (node.left === null) return node;
    return this.findMinNode(node.left);
  }
  // --------------------------------------------------------------------------------------
  getRootNode() {
    return this.root;
  }
  // --------------------------------------------------------------------------------------
  inorder() {
    this.inorderTraversal(this.root);
  }

  inorderTraversal(node) {
    if (node !== null) {
      this.inorderTraversal(node.left);
      console.log(node.data);
      this.inorderTraversal(node.right);
    }
  }
  // --------------------------------------------------------------------------------------
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }
  // --------------------------------------------------------------------------------------
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }
  // --------------------------------------------------------------------------------------
  search(node, data) {
    if (node === null || node.data === data) return node;

    if (data < node.data) return this.search(node.left, data);
    return this.search(node.right, data);
  }
}

// let bst = new BinarySearchTree();

// bst.insert(15);
// bst.insert(25);
// bst.insert(10);
// bst.insert(7);
// bst.insert(22);
// bst.insert(17);
// bst.insert(13);
// bst.inorder();

module.exports = {BinarySearchTree,Node};