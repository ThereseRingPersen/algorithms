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

  levelWidths() {
    if (this.root === null) {
      return null;
    }
    const widths = [0];
    const nodesList = [this.root, null];

    while (nodesList.length > 1) {
      const node = nodesList.shift();
      if (node === null) {
        nodesList.push(null);
        widths.push(0);
      } else {
        nodesList.push(...node.children);
        widths[widths.length - 1]++;
      }
    }
    return widths;
  }
}

module.exports = { Node, Tree };
