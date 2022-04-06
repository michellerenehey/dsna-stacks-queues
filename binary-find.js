class PersonTreeNode {
  constructor(person) {
    this.value = person.name;
    this.person = person;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }

  // did not complete, leaving notes for review
  //   findPerson(name) {
  //     // find the right person
  //     if (this.value === name) return this.person;

  //     // decide left or right
  //     const dir = node.value < this.value ? 'left' : 'right';
  //     if (!this[dir]) return null;
  //     // delegate left or right
  //     return this[dir].findPerson(name);
  //   }
}
