'use strict';

const NAryTree = require('../lib/n-ary-tree');

describe('tests for n-ary-tree.js', () => {
  const root = new NAryTree(0);
  const one = new NAryTree(1);
  const two = new NAryTree(2);
  const three = new NAryTree(3);
  const four = new NAryTree(4);
  const five = new NAryTree(5);
  const six = new NAryTree(6);
  const seven = new NAryTree(7);
  const eight = new NAryTree(8);
  const doubleEight = new NAryTree(8);
  
  root.appendChild(one);
  root.appendChild(two);
  root.appendChild(three);
  two.appendChild(four);
  two.appendChild(five);
  two.appendChild(six);
  five.appendChild(seven);
  seven.appendChild(eight);
  eight.appendChild(doubleEight);

  describe('tests for functionality of append function', () => {

    test('checking that append properly appends values', () => {
      expect(seven.children).toEqual([eight]);
    });

    test('checking that invalid input to append method throws', () => {
      expect(() => root.appendChild('bad')).toThrow();
    });

  });

  describe('tests for breadthFirstFind function', () => {

    test('checking that breadthFirstFind prototype finds correct node', () => {
      expect(root.breadthFirstFind(2)).toEqual(two);
    });

    test('checking that breadthFirstFind prototype finds correct node in correct order', () => {
      expect(root.breadthFirstFind(8)).toEqual(eight);
    });
  });

  describe('tests for breadthFirstToString function', () => {

    test('checking that breadthFirstToString prototype returns correct string', () => {
      expect(root.breadthFirstToString()).toEqual('0\n1\n2\n3\n4\n5\n6\n7\n8\n8');
    });

    test('checking that breadthFirstToString prototype returns string of length one on root with no children', () => {
      let empty = new NAryTree(0);
      expect(empty.breadthFirstToString()).toEqual('0');
    });
  });

  describe('tests for depthFirstToArray function', () => {

    test('checking that depthFirstToArray prototype returns array with depth first order of node values', () => {
      expect(root.depthFirstToArray()).toEqual([0, 3, 2, 6, 5, 7, 8, 8, 4, 1]);
    });

    test('checking that depthFirstToArray prototype returns array of length one on root with no children', () => {
      let empty = new NAryTree(0);
      expect(empty.depthFirstToArray()).toEqual([0]);
    });
  });
});