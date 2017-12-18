'use strict';

class NArySearchTree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  appendChild(tree) {
    if (!(tree instanceof NArySearchTree)){
      throw new TypeError('argument must be an instance of the NArySearchTree');
    }
    this.children.push(tree);
  }


  breadthFirstFind() {
    let queue = [];
    queue.push(this);

    let current = null;

    while (queue.length > 0) {
      current = queue.shift();

      console.log(`visiting ${current.value}`);
      for (let child of current.children) {
        queue.push(child);
      }
    }
  }

  depthFirstFind() {
    let stack = [];
    stack.push(this);

    let current = null;

    while (stack.length > 0) {
      current = stack.pop();

      console.log(`visiting ${current.value}`);
      for (let child of current.children) {
        stack.push(child);
      }
    }
  }
}

module.exports = NArySearchTree;