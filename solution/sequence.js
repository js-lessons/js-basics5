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

function Iterator(seq){
	this.seq = seq;
}

Iterator.prototype.next = function(){
	var current = this.seq[0];
	this.seq = this.seq.slice(1);
	return current;
}

Iterator.prototype.hasNext = function(){
	return this.seq.length;
}

function ArraySeq(arr) {
	this.seq = arr;
	this.iterator = new Iterator(this.seq);
}

function RangeSeq(from, to) {
  var range = function(start, end, step, arr){
    if (!step) return range(start, end, (start < end)? 1:-1, arr);
    if ((end - start) * step < 0) return arr;
    else return range(start + step, end, step, arr.concat([start]));
  }
  this.seq = range(from, to, undefined, []);
  this.iterator = new Iterator(this.seq);
}

function HashSeq(obj) {
  // For tests to pass current value should have property Object.keys(obj)[0]
  this.seq = [];
  for (prop in obj) this.seq.push([prop, obj[prop]]);
  this.iterator = new Iterator(this.seq);
}

function logFive(seq) {
	var iter = seq.iterator;
	for (var i = 0; i < 5; i++) if (iter.hasNext())
	{
		console.log(iter.next()); 
	}
   	
}

module.exports = {
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq,
  HashSeq: HashSeq,
  logFive: logFive
};
