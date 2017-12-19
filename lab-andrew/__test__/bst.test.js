'use strict';

const BinarySearchTree = require('../lib/bst');

describe('tests for bst.js', () => {
  let root = new BinarySearchTree(10);

  describe('testing insert function', () => {
    root.insert(15);

    test('insert function should return expected values when used properly', () => {
      expect(root.right.value).toEqual(15);
      expect(root.left).toBeNull();
      root.insert(5);
      expect(root.left.value).toEqual(5);
      root.insert(3);
      expect(root.left.left.value).toEqual(3);
      root.insert(13);
      expect(root.right.left.value).toEqual(13);
    });

    test('insert function should throw error when invalid input passed in', () => {
      expect(() => root.insert(15)).toThrow();
      expect(() => root.insert(true)).toThrow();
    });
  });

  describe('testing find function', () => {
    test('find should find the correct number of an existing node', () => {
      expect(root.find(10)).toEqual(root);
      expect(root.find(13)).toEqual(root.right.left);
      expect(root.find(3)).toEqual(root.left.left);
    });

    test('find should return negative 1 if number does not exist in tree', () => {
      expect(root.find(11)).toEqual(-1);
      expect(root.find(2)).toEqual(-1);
    });
  });

  describe('testing remove function', () => {
    test('remove should be able to remove a leaf', () => {
      root.remove(3);
      expect(root.find(3)).toEqual(-1);
    });
    
    test('remove should be able to remove a node with one child', () => {
      root.remove(15);
      expect(root.find(15)).toEqual(-1);
      expect(root.right.value).toEqual(13);

    });

    test('remove should be able to remove a node with two children', () => {
      root.insert(8);
      root.insert(2);
      root.remove(5);
      expect(root.find(5)).toEqual(-1);
      expect(root.left.value).toEqual(8);
      expect(root.left.right).toBeNull();
      expect(root.left.left.value).toEqual(2);

    });

    test('remove should maintain sort after node removal', () =>{
      root.insert(15);
      root.insert(14);
      root.insert(17);
      root.insert(16);
      root.remove(15);
      expect(root.right.right.value).toEqual(16);
      root.remove(14);
      root.remove(16);
      root.remove(17);
      console.log(root);
    });

    test('remove should be able to remove root, with 2, 1 and 0 children', () => {
      root.remove(10);
      expect(root.value).toEqual(13);
      root = root.remove(13);
      expect(root.value).toEqual(8);
      root = root.remove(8);
      root = root.remove(2);
      expect(root).toBeNull();
      root = new BinarySearchTree(10);
      root.insert(11);
      root = root.remove(10);
      expect(root.value).toEqual(11);
    });
  });

});