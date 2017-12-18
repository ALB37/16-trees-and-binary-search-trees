'use strict';

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value > this.value) {
      if (!this.right) {
        return this.right = new BinarySearchTree(value);
      } else {
        return this.right.insert(value);
      }
    } else {
      if (!this.left) {
        return this.left = new BinarySearchTree(value);
      } else {
        return this.left.insert(value);
      }
    }
  }

  find(value) {
    if (value === this.value) {
      return this;
    }

    if (value > this.value) {
      if (this.right) {
        return this.right.find(value);
      } else {
        return null;
      }
    }

    if (this.left) {
      return this.left.find(value);
    } else {
      return null;
    }

  }
}

module.exports = BinarySearchTree;