var Vector = require('../solution/vector');

describe('Vector', function() {
  var vec1, vec2;

  beforeEach(function() {
    vec1 = new Vector(1, 2);
    vec2 = new Vector(2, 3);
  });

  describe('plus', function() {
    it('returns new vector that has the sum the two vectors', function() {
      expect(vec1.plus(vec2)).toEqual(new Vector(3, 5));
    });

    it('doesnt mutate any of vectors', function() {
      expect(vec1.plus(vec2)).not.toBe(vec1);
      expect(vec1.plus(vec2)).not.toBe(vec2);
    });
  });

  describe('minus', function() {
    it('returns new vector that has the difference the two vectors', function() {
      expect(vec1.minus(vec2)).toEqual(new Vector(-1, -1));
    });

    it('doesnt mutate any of vectors', function() {
      expect(vec1.minus(vec2)).not.toBe(vec1);
      expect(vec1.minus(vec2)).not.toBe(vec2);
    });
  });

  describe('length', function() {
    it('returns distance to (0, 0)', function() {
      expect((new Vector(3, 4)).length).toEqual(5);
    });
  });
});
