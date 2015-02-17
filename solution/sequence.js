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
function Iterator() {
	this.seq = [];
	this.seqPos = -1;
}

Iterator.prototype.next = function() {
	if (this.seqPos>=this.seq.length-1) {
		return false;
	} else {
		this.seqPos++;
		return true;
	}
}

Iterator.prototype.current = function() {
	return this.seq[this.seqPos];
}

function ArraySeq(arr) {
	this.iter = new Iterator();
	this.iter.seq = arr;
}

function RangeSeq(from, to) {
	this.iter = new Iterator();
	if (from<to) {
		for (var i=from; i<=to; i++) {
			this.iter.seq.push(i);
		}
	} else if (from>to) {
		for (var i=from; i>=to; i--) {
			this.iter.seq.push(i);
		}
	}
}

function HashSeq(obj) {
  // For tests to pass current value should have property Object.keys(obj)[0]
	this.iter = new Iterator();
	for (var key in obj) {
		this.iter.seq.push([key, obj[key]]);
	}
}

function logFive(seq) {
	for (var i=0; i<5; i++) {
		if(!seq.iter.next()) {
			break;
		}
		console.log(seq.iter.current());
	}
}

module.exports = {
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq,
  HashSeq: HashSeq,
  logFive: logFive
};
