function Vector(x, y) {
  // Write a constructor Vector that represents a vector
  // in two-dimensional space. It takes x and y parameters (numbers),
  // which it should save to properties of the same name.
this.x = x;
 this.y = y;
  }

// Give the Vector prototype two methods, plus and minus,
// that take another vector as a parameter and return a new vector
// that has the sum or difference of the two vectors’
// (the one in this and the parameter) x and y values.


Vector.prototype.plus = function(vector) {
var x = this.x + vector.x;
var y = this.y + vector.y;
return new Vector(x, y);
}

Vector.prototype.minus = function(vector) {
var x = this.x - vector.x;
var y = this.y - vector.y;
return new Vector(x, y);
}

Object.defineProperty(Vector.prototype, 'length', {

get: function() {
return Math.sqrt((this.x * this.x) + (this.y *this.y));
}

  // Add a getter property length to the prototype that computes
  // the length of the vector—that is, the distance of
  // the point (x, y) from the origin (0, 0).
});

module.exports = Vector;
