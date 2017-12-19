'use strict';

const NArySearchTree = function(value) {
  this.value = value;
  this.children = [];
};

NArySearchTree.prototype.appendChild = function(tree) {
  if (!(tree instanceof NArySearchTree)){
    throw new TypeError('argument must be an instance of the NArySearchTree');
  }
  this.children.push(tree);
};


NArySearchTree.prototype.breadthFirstFind = function(value) {
  let queue = [];
  queue.push(this);

  let current = null; 

  while (queue.length > 0) {
    current = queue.shift();
    if (current.value === value){
      return current;
    }

    for (let child of current.children) {
      queue.push(child);
    }
  }
};

NArySearchTree.prototype.breadthFirstToString = function () {
  let queue = [];
  queue.push(this);

  let current = null;
  let strAcc = '';

  while (queue.length > 0) {
    current = queue.shift();
    strAcc += `\n${current.value}`;

    for (let child of current.children) {
      queue.push(child);
    }
  }
  return strAcc.trim();
};

NArySearchTree.prototype.depthFirstFind = function(value) {
  let stack = [];
  stack.push(this);

  let current = null;

  while (stack.length > 0) {
    current = stack.pop();
    if (current.value === value){
      return current;
    }

    for (let child of current.children) {
      stack.push(child);
    }
  }
};

module.exports = NArySearchTree;