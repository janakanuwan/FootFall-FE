import { addEntries, changeEntriesFrom, changeEntriesRange, changeEntriesTo, fetchEntries } from './entriesActions';

describe('entriesActions', () => {

  it('should create an action to change entries range', () => {
    const time = +new Date('2018-04-28');
    expect(changeEntriesRange({ from: time, to: time })).toMatchSnapshot();
  });

  it('should create an action to add entries data', () => {
    expect(addEntries([{ id: 1, locationId: 1, entry: 1, exit: 2, time: 12345656 }]))
      .toMatchSnapshot();
  });

  it('should create an action to set failed entries data', () => {
    const action = addEntries(new Error('Failed to fetch'));
    expect(action).toMatchSnapshot();
    expect(action.error).toEqual(true);
    expect(action.payload.message).not.toEqual(null);
  });

  it('should create an action to fetch entries', () => {
    expect(fetchEntries({ merchantId: 1234, token: 12, email: 'hello@test.com', locationId: 2 })).toMatchSnapshot();
  });
});
