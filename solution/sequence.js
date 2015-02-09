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

function ArraySeq(arr) {
    this.array = arr;
}

function RangeSeq(from, to) {
    this.array;
    this.createArray(from,to);
}

RangeSeq.prototype.createArray = function(from, to){
    var arr = [];
    if(from > to){
        for(var i = from; from >= to; from--){
            arr.push(from);
        }
    }else{
        for(var i = from; from <= to; from++){
            arr.push(from);
        }
    }
    this.array = arr;
}

function HashSeq(obj) {
    this.array;
    this.createArray(obj);
}

HashSeq.prototype.createArray = function(obj){
    var arr = [];
    for(var key in obj){
        arr.push([key,obj[key]]);
    }
    this.array = arr;
}

function logFive(seq) {
    var arr = [];
    var lgth = seq.array.length <= 5 ? seq.array.length : 5;
    for(var i=0; i < lgth; i++){
        console.log(seq.array[i]);
    }
}

module.exports = {
  ArraySeq: ArraySeq,
  RangeSeq: RangeSeq,
  HashSeq: HashSeq,
  logFive: logFive
};
