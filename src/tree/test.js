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
