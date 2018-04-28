import entriesUtil from './entriesUtil';
import { List, Record } from 'Models';

describe('entriesUtil', () => {
  const TestEntry = Record({ locationId: Number, time: Number });
  const TestLocation = Record({ id: Number });

  [
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }, {
        locationId: 2,
        time: 3
      }],
      location: { id: 1 },
      fromTime: 0,
      toTime: 10,
      expected: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }]
    },
    {
      entries: [{ locationId: 1, time: 0 }, { locationId: 1, time: 2 }, { locationId: 1, time: 11 }, {
        locationId: 2,
        time: 3
      }],
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
});
