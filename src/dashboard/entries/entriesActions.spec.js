import { addEntries, changeEntriesFrom, changeEntriesTo } from './entriesActions';

describe('entriesActions', () => {

  it('should create an action to change entries from', () => {
    expect(changeEntriesFrom(+new Date('2018-04-24'))).toMatchSnapshot();
  });

  it('should create an action to change entries to', () => {
    expect(changeEntriesTo(+new Date('2018-04-28'))).toMatchSnapshot();
  });

  it('should create an action to add dashboard data', () => {
    expect(addEntries([{ id: 1, locationId: 1, entry: 1, exit: 2, time: 12345656 }]))
      .toMatchSnapshot();
  });

  it('should create an action to set failed dashboard data', () => {
    const action = addEntries(new Error('Failed to fetch'));
    expect(action).toMatchSnapshot();
    expect(action.error).toEqual(true);
    expect(action.payload.message).not.toEqual(null);
  });
});
