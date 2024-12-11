//  Array
// Traversal, insertion, sorting, recursion searching

const numbers = [5, 12, 7, 19, 3, 8, 15, 1, 14, 6, 11, 20, 2, 9, 18, 4, 13, 10, 17, 16]
const n = numbers.length

// -----------------------------------------------------------
// Traversal

// Using for loop
for(let i =0; i<n; i++){
    // console.log(numbers[i]);
    
}
// For...of Loop:
for(let num of numbers){
    // console.log(num);
    
}
// For...in Loop:
for(let num in numbers){
    // console.log(numbers[num]);
    
}
//forEach
numbers.forEach ((element, index) => {
    // console.log(index + ":" + element);
    
})
//using map
numbers.map((element) => {
    // console.log(element);
})
// while method
let i = 0
while(i<n){
    // console.log(numbers[i]);
    i++   
}
//do-while
i =0
do{ // console.log(numbers[i]);
    i++
}while (i<n)
// reduce method
numbers.reduce((accumulator, currentValue) => {
    // console.log(currentValue);
    }, 0);
// filter method
numbers.filter((element) => {
    // console.log(element);
});

//every method
numbers.every((element, value) => {
    // console.log(element);
    // return true
});
// some method
numbers.some((element) => {
    // console.log(element);
});
// console.log(...numbers);

// -------------------------------------------------------------
// Insertion

// push method
arr = [1,2,3,4]
arr.push(78,89)
// console.log(arr); //[ 1, 2, 3, 4, 78, 89 ]

// unshift method
arr = [1,2,3,4]
arr.unshift(23,44)
// console.log(arr); //[ 23, 44, 1, 2, 3, 4 ]

//concat method
arr = [1,2,3,4]
arr1 = [5,6,7,8]

// console.log(arr.concat(arr1));

// splice
// array.splice(index, count(Number of items to be removed.), item1, ....., itemX)
arr = [1,2,3,4]
arr.splice(1,0,45,66)
// console.log(arr);

//spread op
arr = [1,2,3,4]
arr = [0, ...arr, 4];
// console.log(arr);

// ----------------------------------------
// Seraching

// (, , includes, find, findindex, filter, some, every)

// indexof
a = numbers.indexOf(2)
// console.log(a);

// lastindexof
a = numbers.lastIndexOf(2)
// console.log(a);

a = numbers.includes(12)
// console.log(a);

a = numbers.find(num => num > 13)
// console.log(a);

// findindex
a = numbers.findIndex(num => num > 16)
    // console.log(a);

// filter
a = numbers.filter(num => num > 16)
// console.log(a);

//some
a = numbers.some(num => num > 35);
// console.log(a);

// every
a = numbers.every(num => num > 35);
console.log(a);


// --------------------------------------------------------------
// Deletion

//Splice
arr = [1,2,3,4]
arr.splice(1,1) //(index, elements to be deleted)
// console.log(arr);

//pop
arr = [1,2,3,4]
// console.log(arr.pop());


//shift
arr = [1,2,3,4,]
// console.log(arr.shift());

//filter
arr = [1,2,3,4,]
a = arr.filter(num => num !== 20)
// console.log(a);

//slice
arr = [1,2,3,4]
a = arr.slice(1,2)

// console.log(a);

//delete
arr = [1,2,3,4]
delete arr[1]
console.log(arr);
