class Stack {
  constructor() {
    this.banana = [];
  }

  push(item) {
    return this.banana.push(item);
  }

  pop() {
    return this.banana.pop() || null;
  }

  peek() {
    return this.banana[this.length - 1];
  }

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
