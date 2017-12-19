'use strict';

const BinarySearchTree = require('../lib/bst');

describe('tests for bst.js', () => {
  const root = new BinarySearchTree(10);

  describe('testing insert function', () => {
    root.insert(15);

    test('insert function should return expected values when used properly', () => {
      expect(root.right.value).toEqual(15);
      expect(root.left).toBeNull();
    });

    test('insert function should throw error when duplicate value added', () => {
      expect(() => root.insert(15)).toThrow();
    });
  });

});