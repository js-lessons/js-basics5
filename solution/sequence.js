// Design an interface that abstracts iteration over a
// collection of values. An object that provides this interface
// represents a sequence, and the interface must somehow
// make it possible for code that uses such an object to
// iterate over the sequence, looking at the element values
// it is made up of and having some way to find out when
// the end of the sequence is reached.
//
// When you have specified your interface, try to write a
// function logFive that takes a sequence object and calls
// console.log on its first five elements—or fewer,
// if the sequence has fewer than five elements.

// Then implement an object type ArraySeq that wraps
// an array and allows iteration over the array
// using the interface you designed. Implement another
// object type RangeSeq that iterates over a range of
// integers (taking from and to arguments to its constructor) instead.
// And another one that takes JavaScript object as value source

//function ArraySeq(arr) {
// }
 
//function RangeSeq(from, to) {
//}

//function HashSeq(obj) {
   //}
  
//function logFive(seq) {

//}

function ArraySeq(arr) {
    this.arr = arr;
    this.currentIndex = -1;
    this.next = function() {
        this.currentIndex++;
        return this.arr[this.currentIndex];
    };
    this.hasNext = function() {
        if (this.currentIndex < this.arr.length - 1) {
            return true;
        } else {
            this.currentIndex = -1;
            return false;
        }
    };
    this.toStartPosition = function() {
        this.currentIndex = -1;
    }
}

function RangeSeq(from, to) {
    this.from = from;
    this.to = to;
    if (this.from < this.to) {
        this.currentPosition = this.from - 1;
        this.next = function() {
            this.currentPosition++;
            return this.currentPosition;
        };
        this.hasNext = function() {
            if (this.currentPosition < this.to) {
                return true;
            } else {
                this.currentPosition = this.from - 1;
                return false;
            }
        }
        this.toStartPosition = function() {
            this.currentPosition = this.from;
        }
    } else {
        this.currentPosition = this.from + 1;
        this.next = function() {
            this.currentPosition--;
            return this.currentPosition;
        };
        this.hasNext = function() {
            if (this.currentPosition > this.to) {
                return true;
            } else {
                this.currentPosition = this.from + 1;
                return false;
            }
        }
        this.toStartPosition = function() {
            this.currentPosition = this.from;
        }
    }
}

function HashSeq(obj) {
    this.obj = obj;
    this.currentIndex = -1;
    this.resultArray = [];
    for (var key in this.obj) {
        var array = [];
        array.push(key);
        array.push(obj[key]);
        this.resultArray.push(array);
    }

    this.next = function() {
        this.currentIndex++;
        return this.resultArray[this.currentIndex];
    };
    this.hasNext = function() {
        if (this.currentIndex < this.resultArray.length - 1) {
            return true;
        } else {
            this.currentIndex = -1;
            return false;
        }
    };
    this.toStartPosition = function() {
        this.currentIndex = -1;
    }
}




function logFive(seq) {
    for (var i = 0; i < 5; i++) {
        if (seq.hasNext()) {
            console.log(seq.next());
        } else {
            seq.toStartPosition();
            break;
        }
    }
    seq.toStartPosition();
}

module.exports = {
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq,
  HashSeq: HashSeq,
  logFive: logFive
};
