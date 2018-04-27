import manager from './entriesManager';

describe('entriesManager', () => {

  [
    { value: 1, expected: true },
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: '1', expected: false },
  ].map(({ value, expected }, index) =>
    it(`should return true for numbers (index: ${index})`, () => {
      expect(manager.isNumber(value)).toEqual(expected);
    })
  );

  [
    {
      oldRange: { from: null, to: null },
      newRange: { from: 1, to: 2 },
      expected: { from: 1, to: 2 }
    },
    {
      oldRange: { from: 1, to: 2 },
      newRange: { from: 3, to: 1 },
      expected: { from: 1, to: 2 }
    },
    {
      oldRange: { from: 2, to: 2 },
      newRange: { from: 1, to: 3 },
      expected: { from: 1, to: 3 }
    },
    {
      oldRange: { from: 2, to: 6 },
      newRange: { from: 3, to: 5 },
      expected: { from: 3, to: 5 }
    },
    {
      oldRange: { from: 2, to: 6 },
      newRange: { from: undefined, to: 5 },
      expected: { from: 2, to: 5 }
    },
    {
      oldRange: { from: 2, to: 6 },
      newRange: { from: 3, to: undefined },
      expected: { from: 3, to: 6 }
    },

  ].map(({ oldRange, newRange, expected }, index) =>
    it(`should return the updated range (index: ${index}`, () => {
      expect(manager.updatedRange(oldRange, newRange)).toEqual(expected);
    })
  );

});
