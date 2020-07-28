const T = require("./index");
const Node = T.Node;
const Tree = T.Tree;

describe("Node", () => {
  test("Node is a constructor", () => {
    expect(typeof Node.prototype.constructor).toEqual("function");
  });

  test("Node has a data and children properties", () => {
    const n = new Node("a");
    expect(n.data).toEqual("a");
    expect(n.left).toEqual(null);
    expect(n.right).toEqual(null);
  });
});

describe("Tree", () => {
  test("starts empty", () => {
    const tree = new Tree();
    expect(tree.root).toEqual(null);
  });
  test("Tree can insert a node", () => {
    const tree = new Tree();
    tree.insert("a");
    expect(tree.root.data).toEqual("a");
  });
  test("Can remove a node with two children from a tree", () => {
    const tree = new Tree();
    tree.insert(40);
    tree.insert(60);
    tree.insert(55);
    tree.insert(53);
    tree.insert(56);
    tree.insert(100);
    tree.insert(70);
    tree.insert(69);
    tree.insert(90);
    tree.insert(120);
    tree.remove(100);
    expect(tree.root.right.right.data).toEqual(120);
    expect(tree.root.right.right.left.data).toEqual(70);
    expect(tree.root.right.right.right).toEqual(null);
  });
  test("Can remove a leafnode from a tree", () => {
    const tree = new Tree();
    tree.insert(40);
    tree.insert(60);
    tree.remove(60);
    expect(tree.root.right).toEqual(null);
  });
  test("Can remove a node with one right child from a tree", () => {
    const tree = new Tree();
    tree.insert(40);
    tree.insert(60);
    tree.insert(50);
    tree.remove(60);
    expect(tree.root.right.right).toEqual(null);
    expect(tree.root.right.data).toEqual(50);
  });

  test("Can remove a node with one left child from a tree", () => {
    const tree = new Tree();
    tree.insert(40);
    tree.insert(30);
    tree.insert(20);
    tree.remove(30);
    expect(tree.root.left.left).toEqual(null);
    expect(tree.root.left.data).toEqual(20);
  });
});
