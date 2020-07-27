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
    expect(tree.root).toEqual("a");
  });
});
