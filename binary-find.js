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

  findPerson(name) {
    // Implement me!
  }
}
