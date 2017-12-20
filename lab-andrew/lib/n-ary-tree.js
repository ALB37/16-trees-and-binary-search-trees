'use strict';

const NAryTree = function(value){
  this.value = value;
  this.children = [];
};

NAryTree.prototype.appendChild = function(tree){
  if (!(tree instanceof NAryTree)){
    throw new TypeError('argument must be an instance of the NAryTree');
  }
  this.children.push(tree);
};


NAryTree.prototype.breadthFirstFind = function(value){
  let queue = [];
  queue.push(this);

  let current = null; 

  while (queue.length > 0){
    current = queue.shift();
    if (current.value === value){
      return current;
    }

    for (let child of current.children){
      queue.push(child);
    }
  }
};

NAryTree.prototype.breadthFirstToString = function (){
  let queue = [];
  queue.push(this);

  let current = null;
  let strAcc = '';

  while (queue.length > 0){
    current = queue.shift();
    strAcc += `\n${current.value}`;

    for (let child of current.children){
      queue.push(child);
    }
  }
  return strAcc.trim();
};

NAryTree.prototype.depthFirstToArray = function(){
  let stack = [];
  stack.push(this);

  let current = null;
  let solArray = [];

  while (stack.length > 0){
    current = stack.pop();
    solArray.push(current.value);

    for (let child of current.children){
      stack.push(child);
    }
  }
  return solArray;
};

module.exports = NAryTree;