const {size, pop, push, peek, isEmpty, printStack} = require("./StackImplementation")

const arr = [1,2,3,4,5,6,7,9]

console.log(size(arr));

console.log(pop(arr));

push(arr, 50);
console.log(arr);

console.log(peek(arr));

console.log(!isEmpty(arr));


console.log(printStack(arr));





