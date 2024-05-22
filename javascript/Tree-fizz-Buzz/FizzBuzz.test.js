const { KaryNode, KaryTree } = require('./FizzBuzz');

describe('FizzBuzz K-ary Tree', () => {
    test('Should return a new tree with FizzBuzz rules applied', () => {
        const root = new KaryNode(15);
        root.children.push(new KaryNode(3));
        root.children.push(new KaryNode(5));
        root.children.push(new KaryNode(7));

        const tree = new KaryTree(root);
        const newTree = tree.fizzBuzzTree();

        expect(newTree.root.value).toBe("FizzBuzz");
        expect(newTree.root.children[0].value).toBe("Fizz");
        expect(newTree.root.children[1].value).toBe("Buzz");
        expect(newTree.root.children[2].value).toBe("7");
    });

    test('Should handle an empty tree', () => {
        const tree = new KaryTree();
        const newTree = tree.fizzBuzzTree();

        expect(newTree.root).toBeNull();
    });

    test('Should handle a tree with one node', () => {
        const root = new KaryNode(3);
        const tree = new KaryTree(root);
        const newTree = tree.fizzBuzzTree();

        expect(newTree.root.value).toBe("Fizz");
    });

    test('Should handle a larger K-ary tree', () => {
        const root = new KaryNode(10);
        const child1 = new KaryNode(9);
        const child2 = new KaryNode(20);
        const child3 = new KaryNode(14);
        root.children.push(child1, child2, child3);

        const grandchild1 = new KaryNode(30);
        const grandchild2 = new KaryNode(6);
        child1.children.push(grandchild1, grandchild2);

        const tree = new KaryTree(root);
        const newTree = tree.fizzBuzzTree();

        expect(newTree.root.value).toBe("Buzz");
        expect(newTree.root.children[0].value).toBe("Fizz");
        expect(newTree.root.children[1].value).toBe("Buzz");
        expect(newTree.root.children[2].value).toBe("14");
        expect(newTree.root.children[0].children[0].value).toBe("FizzBuzz");
        expect(newTree.root.children[0].children[1].value).toBe("Fizz");
    });
});
