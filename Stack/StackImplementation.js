class Stack {
    constructor() {
      this.items = [];
    }
  
    // Add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Return the top element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Return the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  }
  
  // Example usage:
  const stack = new Stack();


// Input: A + B * C + D
// Output: ABC*+D+

function infixToPrefix(str) {
  let stack = new Stack()
  let n = str.length;
  let ans = "";

  for (let i = 0; i < n; i++) {
      if (str.charAt(i) != "+" && str.charAt(i) != "-" && str.charAt(i) != "*" && str.charAt(i) != "/") {
          stack.push(str.charAt(i));
      } else {
          ans += str.charAt(i);
      }

      while (ans.length > stack.length) {
          ans += stack.pop();
      }
  }

  return ans;
}

console.log(infixToPrefix("A + B * C + D"));
// Output: ABC*+D+



