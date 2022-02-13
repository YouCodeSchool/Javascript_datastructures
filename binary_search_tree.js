let Node = function(data, left = null, right = null) {
    this.data = data
    this.left = left
    this.right = right
}

let BST = function() {
    this.root = null;

    this.add = function(data) {
        const node = this.root
        if (node === null) {
            this.root = new Node(data);
        } else {
            const searchtree = function(node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return
                    } else if (node.left !== null) {
                        return searchtree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data)
                        return
                    } else if (node.right !== null) {
                        return searchtree(node.right)
                    }

                } else {
                    return null
                }
            }
            return searchtree(node)
        }
    }
    this.min = function() {
        const node = this.root
        let bs = function(node) {
            if (node.left == null) {
                return node.data
            }
            if (node.left != null) {
                bs(node.left)
            }
        }
        return bs(node)
    }
    this.max = function() {
        const current = this.root
        let bs = function(current) {
            if (current.right == null) {
                return current.data
            }
            if (current.right != null) {
                bs(current.right)
            }
        }
        return bs(current)
    }
    this.isPresent = function(value) {
        let thiscurrent = this.root
        let isFound = function(data, current) {
            let ispresent = false
            if (!(current.data == data)) {
                if (data < current.data) {
                    current = current.left
                } else {
                    current = current.right
                }
                isFound(data, current)
            } else {
                ispresent = true
            }
            return ispresent
        }
        return isFound(value, thiscurrent)

    }
    this.remove = function(value) {
        let node = this.root
        let deleterecur = function(node) {
            if (node.left == null && node.right == null) {
                node = null;
            } else if (node.left == null) {
                deleterecur(node.right)
            } else if (node.right == null) {
                deleterecur(node.left)
            } else {
                deleterecur(node.left)
                deleterecur(node.right)
            }
        }
        let search = function(value) {
            if (value > node.data) {
                search(node.right)
            } else if (value < node.data) {
                search(node.left)
            } else if (value == node.data) {
                deleterecur(node)
            }
        }
    }
}
let bst = new BST;
bst.add(5)
bst.add(1)
console.log(bst.isPresent(5))
console.log(bst.isPresent(7))
console.log(bst.isPresent(1))