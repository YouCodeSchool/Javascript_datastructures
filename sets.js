let mySet = function() {
    this.collection = []
    this.count = 0

    this.has = function(value) {
        let has = false;
        this.collection.indexOf(value) != -1 ? has = true : has = false
        return has
    }
    this.values = function() {
        return this.collection
    }
    this.add = function(value) {
        if (!this.has(value)) {
            this.collection[this.count] = value
            this.count++;
            return true
        }
        return false
    }
    this.remove = function(value) {
        if (this.has(value)) {
            let index = collection.indexOf(value)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }
    this.size = function() {
        return this.count
    }
    this.union = function(set) {
        let union = new mySet
        let first = this.values()
        let second = set.values()
        first.forEach(function(e) {
            union.add(e);
        });
        second.forEach(function(e) {
            union.add(e);
        });
        return union
    }
    this.lastIndex = function() {
        return this.count - 1
    }
    this.intersection = function(set) {
        let inter = new mySet
        let i = j = 0
        while (i < this.count) {
            if (set.has(this.collection[i])) {
                inter.add(this.collection[i])
            }
            i++
        }
        return inter
    }
    this.difference = function(set) {
        let diff = new mySet
        let i = j = 0
        while (i < this.count) {
            if (!set.has(this.collection[i])) {
                diff.add(this.collection[i])
            }
            i++
        }
        return diff
    }

}
let first = new mySet;
let second = new mySet;
first.add(1)
first.add(2)
first.add(3)
first.add(4)
first.add(3)

first.add(99)


second.add(10)
second.add(2)
second.add(3)
second.add(13)
second.add(99)

second.add(99)


console.log(first.difference(second))