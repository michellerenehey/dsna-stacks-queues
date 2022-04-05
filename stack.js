class Stack {
  // initiating a constructor & setting an empty array
  constructor() {
    this.banana = [];
  }

  // push an item onto stack
  push(item) {
    return this.banana.unshift(item);
  }

  // pop off item from stack
  // if using .pop need to use unshift in push
  // could also use .push paired with .shift
  pop() {
    return this.banana.pop() || null;
  }

  // see if there are items left in the array
  peek() {
    return this.banana[this.length - 1];
  }

  // also works (with latest version):
  // peek() {
  //   return this.banana.at(-1)
  // }

  get length() {
    return this.banana.length;
  }
}

// class Stack {
//   #list = []; // this is NEW! putting properties on classes directly. # is private.
// }

const stack = new Stack();
stack.push('fox');
stack.push('goose');
stack.push('lizard');

console.log(stack.pop()); // 'lizard'
console.log(stack.peek()); // 'goose'
console.log(stack.pop()); // 'goose'

stack.push('llama');
console.log(stack.pop()); // 'llama'
console.log(stack.peek()); // 'fox'
console.log(stack.pop()); // 'fox'
console.log(stack.pop()); // null
