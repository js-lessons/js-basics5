function StretchCell(inner, width, height) {
  // Implement a cell type named StretchCell(inner, width, height)
  // that conforms to the table cell interface described in example inside vendor folder.
  // It should wrap another cell (like UnderlinedCell does)
  // and ensure that the resulting cell has at least the given
  // width and height, even if the inner cell would naturally be smaller.
    this.inner = inner;
    this.width = width;
    this.height = height;
};

StretchCell.prototype.minWidth = function() {
    return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function() {
    return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width,height);
};

module.exports = StretchCell;
