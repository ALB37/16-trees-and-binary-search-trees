'use strict';

class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value){
    if (typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    if (value === this.value){
      throw new Error('value already exists in BST');
    }
    if (value > this.value){
      if (!this.right){
        return this.right = new BinarySearchTree(value);
      } else {
        return this.right.insert(value);
      }
    } 
    if (!this.left){
      return this.left = new BinarySearchTree(value);
    } else {
      return this.left.insert(value);
    }
  }

  find(value){
    if (typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    if (value === this.value){
      return this;
    }

    if (value > this.value){
      if (this.right){
        return this.right.find(value);
      } else {
        return -1;
      }
    }

    if (this.left){
      return this.left.find(value);
    } else {
      return -1;
    }

  }

  _findAndRemove(value){

    if (value > this.value){
      if (this.right.value === value){
        if (!this.right.left && this.right.right){
          return this.right = this.right.right;
        }
        if (this.right.left && !this.right.right){
          return this.right = this.right.left;
        }
        return this.right = null;
      }
      return this.right._findAndRemove(value);
    }

    if (this.left.value === value){
      if (!this.left.left && this.left.right){
        return this.left = this.left.right;
      }
      if (this.left.left && !this.left.right){
        return this.left = this.left.left;
      }
      return this.left = null;
    }
    return this.left._findAndRemove(value);
  }

  _findMinValue(){
    if (this.left){
      return this.left._findMinValue();
    }
    return this.value;
  }

  remove(value){
    if (typeof value !== 'number'){
      throw new TypeError('value must be a number');
    }
    let node = this.find(value);
    if (node === -1){
      return -1;
    }
    if (node.left && node.right){
      node.value = node.right._findMinValue();
      if (node.value === node.right.value){
        return node.right = null;
      }
      return node.right._findAndRemove(node.value);
    }
    if ((node.left && !node.right) || (!node.left && node.right)){
      if (node === this){
        if (node.left){
          return node = node.left;
        }
        return node = node.right;
      }
      return this._findAndRemove(value);
    }
    if (node === this){
      return null;
    } 
    return this._findAndRemove(value);
  }
}


module.exports = BinarySearchTree;