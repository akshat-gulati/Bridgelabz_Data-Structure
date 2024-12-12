function size(arr){
    return arr.length;
  }
  function pop(arr){
    return arr.pop();
  }
  
  function push(arr,ele){
    return arr.push(ele);
  }
  
  function peek(arr){
    return arr[size(arr)-1];
  }
  
  function isEmpty(arr){
    if(arr.length === 0){
      return true;
    }
    return false;
  }
  
  function printStack(arr){
    return arr.join();
  }
  
  module.exports = {
    size,
    pop,
    push,
    peek,
    isEmpty,
    printStack
  }