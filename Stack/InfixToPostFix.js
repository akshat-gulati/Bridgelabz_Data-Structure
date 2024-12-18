function isOperand(char) {
    return char.match(/[A-Za-z0-9]/);
}

function infixToPostfix(str) {
    let precedence = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
    };
    let stack = [];
    let postfix = '';

    for (let char of str) {
        if (isOperand(char)) {
            postfix += char;
        } else if (char == '(') {
            stack.push(char);
        } else if (char == ')') {
            while (stack.length && stack[stack.length - 1] != '(') {
                postfix += stack.pop();
            }
            stack.pop();
        } else {
            while (stack.length && precedence[char] <= precedence[stack[stack.length - 1]]) {
                postfix += stack.pop();
            }
            stack.push(char);
        }
    }

    while (stack.length) {
        postfix += stack.pop();
    }

    return postfix;
}

console.log(infixToPostfix("A+B*C+D"));

