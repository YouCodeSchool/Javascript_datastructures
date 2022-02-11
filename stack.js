let Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }

    this.pop = function() {
        this.count--;
        let res = this.storage[this.count]
        this.storage[this.count] = null
        return res
    }
    this.peek = function() {
        return this.storage[this.count - 1]
    }
    this.values = function() {
        return this.storage
    }


};
// test
let s = new Stack
s.push(1)
s.push(6)
s.push(5)
s.push(8)
console.log(s.pop())
s.push(10)
console.log(s.values())