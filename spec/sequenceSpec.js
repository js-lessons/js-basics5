var ArraySeq = require('../solution/sequence').ArraySeq,
  RangeSeq = require('../solution/sequence').RangeSeq,
  HashSeq = require('../solution/sequence').HashSeq,
  logFive = require('../solution/sequence').logFive;

describe('sequence', function() {
  describe('logFive', function() {
    beforeEach(function() {
      spyOn(console, 'log');
    });

    describe('ArraySeq', function() {
      it('iterates over an array', function() {
        logFive(new ArraySeq([false, null, undefined, {}, 'sdf', 'next']));

        expect(console.log.calls.allArgs()).toEqual([
          [false], [null], [undefined], [{}], ['sdf']
        ]);
      });

      it('stops when seq is smaller than 5', function() {
        logFive(new ArraySeq([false, null]));

        expect(console.log.calls.allArgs()).toEqual([[false], [null]]);
      });
    });

    describe('RangeSeq', function() {
      it('takes start and end of range', function() {
        logFive(new RangeSeq(100, 1000));

        expect(console.log.calls.allArgs()).toEqual([
          [100], [101], [102], [103], [104]
        ]);
      });

      it('stops when seq is smaller than 5', function() {
        logFive(new RangeSeq(100, 102));

        expect(console.log.calls.allArgs()).toEqual([
          [100], [101], [102]
        ]);
      });

      it('works with reversed ranges', function() {
        logFive(new RangeSeq(1000, 100));

        expect(console.log.calls.allArgs()).toEqual([
          [1000], [999], [998], [997], [996]
        ]);
      });
    });

    describe('HashSeq', function() {
      it('take hash and iterates over key/value pairs', function() {
        logFive(new HashSeq({ hey: 'ho', ho: 'hey' }));

        expect(console.log.calls.allArgs()).toEqual([
          [['hey', 'ho']], [['ho', 'hey']]
        ]);
      });
    });
  });
})
