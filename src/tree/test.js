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
    expect(n.children.length).toEqual(0);
  });

  test("Node can add child", () => {
    const n = new Node("a");
    n.add("b");

    expect(n.children.length).toEqual(1);
  });
  test("Node can remove a child", () => {
    const n = new Node("a");
    n.add("b");
    n.add("c");

    expect(n.children.length).toEqual(2);

    n.remove("b");

    expect(n.children.length).toEqual(1);

    n.remove("c");

    expect(n.children.length).toEqual(0);
  });
});

describe("Tree", () => {
  test("Traverse Breadth first", () => {
    const numbers = [];
    const tree = new Tree();
    tree.root = new Node(1);
    tree.root.add(2);
    tree.root.add(3);
    tree.root.add(4);
    tree.root.children[0].add(5);
    tree.root.children[0].add(6);
    tree.root.children[1].add(7);
    tree.root.children[2].add(8);
    tree.traverseBreadthFirst((node) => numbers.push(node.data));

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("Traverse Depth first", () => {
    const numbers = [];
    const tree = new Tree();
    tree.root = new Node(1);
    tree.root.add(2);
    tree.root.add(5);
    tree.root.add(7);
    tree.root.children[0].add(3);
    tree.root.children[0].add(4);
    tree.root.children[1].add(6);
    tree.root.children[2].add(8);
    tree.traverseDepthFirst((node) => numbers.push(node.data));

    expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
