import reducer from './entriesReducer';
import { addEntries, changeEntriesRange } from './entriesActions';
import { Entry, List } from 'Models';

describe('entriesReducer', () => {

  const initialState = reducer(undefined, { type: 'INIT' });
  const initialStateRangeFrom = initialState.getIn(['range', 'from']);
  const initialStateRangeTo = initialState.getIn(['range', 'to']);

  const entry1 = { id: 1, entry: 2, exit: 0, time: 1234, locationId: 1 };
  const entry2 = { id: 2, entry: 4, exit: 5, time: 1235, locationId: 2 };
  const entry2_1 = { id: 2, entry: 4, exit: 5, time: 1236, locationId: 2 };
  const entry3 = { id: 3, entry: 4, exit: 5, time: 1237, locationId: 2 };

  it('should set the entries with default values', () => {
    const expected = { range: { from: initialStateRangeFrom, to: initialStateRangeTo }, list: [] };

    expect(initialStateRangeTo).toBeLessThanOrEqual(Date.now());
    expect(initialState.toJS()).toEqual(expected);
  });

  [
    {
      action: changeEntriesRange({ from: 123, to: 1234 }),
      expected: { from: 123, to: 1234 }
    },
    {
      action: changeEntriesRange({ from: 123 }),
      expected: { from: 123, to: initialStateRangeTo }
    },
    {
      action: changeEntriesRange({ from: initialStateRangeTo + 1 }),
      expected: { from: initialStateRangeFrom, to: initialStateRangeTo }
    },
    {
      action: changeEntriesRange({ to: initialStateRangeFrom + 1 }),
      expected: { from: initialStateRangeFrom, to: initialStateRangeFrom + 1 }
    },
  ].map(({ action, expected }, index) =>
    it(`should set the range for entries (index: ${index})`, () => {
      expect(reducer(initialState, action).get('range').toJS()).toEqual(expected);
    })
  );

  it('should add new entries for empty list', () => {
    const action = addEntries(List(Entry)().push(entry1).push(entry2));
    const expected = [entry1, entry2];

    expect(reducer(initialState, action).get('list').toJS()).toEqual(expected);
  });

  it('should add new entries for empty list', () => {
    const action = addEntries(List(Entry)().push(entry1).push(entry2));
    const expected = [entry1, entry2];

    expect(reducer(initialState, action).get('list').toJS()).toEqual(expected);
  });

  it('should add the new entries (if it does not exist) for non-empty list', () => {
    const baseState = reducer(initialState, addEntries(List(Entry)().push(entry1).push(entry2)));
    const action = addEntries(List(Entry)().push(entry2_1).push(entry3));
    const expected = [entry1, entry2, entry3];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should not add new entries at error', () => {
    const action = addEntries(new Error('Failed to fetch'));
    const expected = [];

    expect(reducer(initialState, action).get('list').toJS()).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });


});
