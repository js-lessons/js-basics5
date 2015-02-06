var StretchCell = require('../solution/StretchCell');

describe('StretchCell', function() {
  describe('interface', function() {
    it('behaves almost like TextCell', function() {
      var cell = new StretchCell();

      expect(cell.minWidth).toBeDefined();
      expect(cell.minHeight).toBeDefined();
      expect(cell.draw).toBeDefined();
    });
  });

  describe('inner', function() {
    it('stores inner cell object', function() {
      var innerCell = {};
      var cell = new StretchCell(innerCell);

      expect(cell.inner).toBe(innerCell);
    });
  });

  describe('minWidth', function() {
    var innerCell;

    beforeEach(function() {
      innerCell = { minWidth: function() { return 5; } };
    });

    it('stretches width of the inner', function() {
      var cell = new StretchCell(innerCell, 10, 3);

      expect(cell.minWidth()).toBe(10);
    });

    it('doesnt stretch width if it isnt necessary', function() {
      var cell = new StretchCell(innerCell, 4, 3);

      expect(cell.minWidth()).toBe(5);
    });
  });

  describe('minHeight', function() {
    var innerCell;

    beforeEach(function() {
      innerCell = { minHeight: function() { return 5; } };
    });

    it('stretches width of the inner', function() {
      var cell = new StretchCell(innerCell, 5, 10);

      expect(cell.minHeight()).toBe(10);
    });

    it('doesnt stretch width if it isnt necessary', function() {
      var cell = new StretchCell(innerCell, 3, 3);

      expect(cell.minHeight()).toBe(5);
    });
  });

  describe('draw', function() {
    it ('is delegated to inner', function() {
      innerCell = {
        draw: function() { return ['inner text']; }
      }

      spyOn(innerCell, 'draw').and.callThrough();

      var cell = new StretchCell(innerCell);

      cell.draw(10, 2);
      expect(innerCell.draw).toHaveBeenCalledWith(10, 2);
    });
  });
});
