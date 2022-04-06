// set up the class
class LinkedListNode {
  // set up the info associated with this, beginning with a constructor
  constructor(data) {
    this.data = data;
    // initalize next
    // that will point to the next node
    this.next = null;
  }

  // ADD NODE METHOD
  add(node) {
    // takes in a node
    // if there is no 'next', the node it takes in
    // becomes the 'next'
    if (!this.next) {
      this.next = node;
    } else {
      // if there is a 'next'
      // the current node delegates to the existing next
      // to take over and run the add(node) - starting over
      this.next.add(node);
    }
  }

  // GET LIST METHOD
  getList() {
    // if there is no next (if it's at the end of the road)
    // then return the data value for this node
    if (!this.next) {
      return this.data;
    }
    // return data value plus rest of the list
    return `${this.data} ${this.next.getList()}`;
  }
}

const root = new LinkedListNode('A');
const nodeB = new LinkedListNode('B');
root.add(nodeB);
console.log(root.getList()); // 'A B'
const nodeC = new LinkedListNode('C');
const nodeD = new LinkedListNode('D');
const nodeE = new LinkedListNode('E');
root.add(nodeC);
root.add(nodeD);
root.add(nodeE);
console.log(root.getList()); // 'A B C D E'

//   //set up class
//   class LinkedListNode {
//     //set up info associated with this node
//     constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//     }
//     //add node
//     add(node) {
//       //takes in a node
//       // if there is no next, node it takes in becomes next
//       if (!this.left) {
//         this.right = node;
//       } else {
//         //if there is next
//         //delegate to the current next
//         this.left.add(node);
//       }
//     }}
