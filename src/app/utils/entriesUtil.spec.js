import entriesUtil from './entriesUtil';
import { List, Record } from 'Models';

describe('entriesUtil', () => {
  const TestEntry = Record({ locationId: Number, time: Number });
  const TestLocation = Record({ id: Number });

  [
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }
        , { locationId: 2, time: 3 }],
      location: { id: 1 },
      fromTime: 0,
      toTime: 10,
      expected: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }]
    },
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }
        , { locationId: 2, time: 3 }],
      location: { id: 1 },
      fromTime: 10,
      toTime: 20,
      expected: [{ locationId: 1, time: 11 }]
    },
  ].map(({ entries, location, fromTime, toTime, expected }, index) =>
    it(`should return the 'filteredEntries' (index:${index})`, () => {
      expect(entriesUtil.filteredEntries(List(TestEntry)(entries), TestLocation(location), fromTime, toTime).toJS()).toEqual(expected);
    })
  );

  [
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }
        , { locationId: 2, time: 3 }],
      fromTime: 0,
      toTime: 10,
      expected: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 2, time: 3 }]
    },
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }
        , { locationId: 2, time: 3 }],
      fromTime: 10,
      toTime: 20,
      expected: [{ locationId: 1, time: 11 }]
    },
  ].map(({ entries, location, fromTime, toTime, expected }, index) =>
    it(`should return the 'filteredEntriesByTime' (index:${index})`, () => {
      expect(entriesUtil.filteredEntriesByTime(List(TestEntry)(entries), fromTime, toTime).toJS()).toEqual(expected);
    })
  );

  const TestEntryExit = Record({ entry: Number, exit: Number });

  [
    {
      entries: [{ entry: 1, exit: 0 }, { entry: 2, exit: 2 }, { entry: 4, exit: 2 }],
      expected: 3
    },
    {
      entries: [{ entry: 1, exit: 0 }],
      expected: 1
    },
    {
      entries: [{ entry: 1, exit: 2 }],
      expected: -1
    },
  ].map(({ entries, expected }, index) =>
    it(`should return the 'netEntry' (index:${index})`, () => {
      expect(entriesUtil.netEntry(List(TestEntryExit)(entries))).toEqual(expected);
    })
  );

  [
    {
      entries: [{ entry: 1, exit: 0 }, { entry: 2, exit: 2 }, { entry: 4, exit: 2 }],
      expected: 7
    },
    {
      entries: [{ entry: 1, exit: 0 }],
      expected: 1
    },
    {
      entries: [{ entry: 1, exit: 2 }, { entry: 3, exit: 1 }],
      expected: 4
    },
  ].map(({ entries, expected }, index) =>
    it(`should return the 'sumEntry' (index:${index})`, () => {
      expect(entriesUtil.sumEntry(List(TestEntryExit)(entries))).toEqual(expected);
    })
  );

  [
    {
      entries: [{ entry: 1, exit: 0 }, { entry: 2, exit: 2 }, { entry: 4, exit: 2 }],
      expected: 4
    },
    {
      entries: [{ entry: 1, exit: 0 }],
      expected: 0
    },
    {
      entries: [{ entry: 1, exit: 2 }, { entry: 3, exit: 1 }],
      expected: 3
    },
  ].map(({ entries, expected }, index) =>
    it(`should return the 'sumExit' (index:${index})`, () => {
      expect(entriesUtil.sumExit(List(TestEntryExit)(entries))).toEqual(expected);
    })
  );

});
