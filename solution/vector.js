function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// Give the Vector prototype two methods, plus and minus,
// that take another vector as a parameter and return a new vector
// that has the sum or difference of the two vectors’
// (the one in this and the parameter) x and y values.

Vector.prototype.plus = function(vector) {
  return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector) {
  return new Vector(this.x - vector.x, this.y - vector.y);
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() { return Math.sqrt(this.x*this.x+this.y*this.y); }
});

module.exports = Vector;
