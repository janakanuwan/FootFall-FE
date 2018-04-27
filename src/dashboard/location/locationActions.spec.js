import { addLocations, changeLocation, fetchLocations } from './locationActions';

describe('locationActions', () => {
  it('should create an action for location change', () => {
    expect(changeLocation({ id: 1, name: 'Test Location' })).toMatchSnapshot();
  });

  it('should create an action for adding locations', () => {
    const action = addLocations([{ id: 2, name: 'Test Location 2' }, { id: 3, name: 'Test Loc3' }]);
    expect(action).toMatchSnapshot();
  });

  it('should create an action to set failed locations', () => {
    const action = addLocations(new Error('Failed to fetch'));
    expect(action).toMatchSnapshot();
    expect(action.error).toEqual(true);
    expect(action.payload.message).not.toEqual(null);
  });

  it('should create an action to fetch locations', () => {
    expect(fetchLocations({ merchantId: 1234, token: 12, email: 'hello@test.com' })).toMatchSnapshot();
  });

});
