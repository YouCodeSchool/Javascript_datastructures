let mQueue = function() {
    this.collection = []

    this.print = function() {
        console.log(this.collection)
    }
    this.enqueue = function(value) {
        return this.collection.push(value);
    }
    this.dequeue = function() {
        return this.collection.shift()
    }
    this.front = function() {
        return this.collection[0];
    }
    this.size = function() {
        return this.collection.length;
    }
    this.isEmpty = function() {
        return this.collection.length == 0
    }
}
let myPriorityQueue = function() {
    this.collection = []

    this.print = function() {
        console.log(this.collection)
    }
    this.enqueue = function(array) {
        let added = false
        if (this.isEmpty()) {
            this.collection.push(array)
        } else {
            for (let i = 0; i < this.collection.length; i++) {
                if (array[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, array)
                    added = true
                    break;
                }
            }
        }
        if (!added) {
            this.collection.push(array)
        }
    }
    this.dequeue = function() {
        return this.collection.shift()
    }
    this.front = function() {
        return this.collection[0];
    }
    this.size = function() {
        return this.collection.length;
    }
    this.isEmpty = function() {
        return this.collection.length == 0
    }
}
let q = new myPriorityQueue;
q.enqueue([1, 2])
q.enqueue([2, 1])
q.enqueue([1, 3])
q.enqueue([3, 2])
q.enqueue([4, 4])
q.print()
q.dequeue()
q.print()