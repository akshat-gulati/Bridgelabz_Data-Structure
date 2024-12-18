function isOperator(c) {
    return ['+', '-', '*', '/'].includes(c);
}
function postfixToPrefix(postfix) {
    let stack = [];

    for (let i = 0; i < postfix.length; i++) {
        let char = postfix[i];

        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let expression = char + operand2 + operand1;
            stack.push(expression);
        } else {
            stack.push(char);
        }
    }

    return stack[0];
}

console.log(postfixToPrefix("AB+CD-*"));