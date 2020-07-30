class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter((node) => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBreadthFirst(cb) {
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift();
      nodes.push(...node.children);
      cb(node);
    }
  }

  traverseDepthFirst(cb) {
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift();
      nodes.unshift(...node.children);
      cb(node);
    }
  }
}

module.exports = { Node, Tree };
