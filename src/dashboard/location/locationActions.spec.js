import { changeLocation } from './locationActions';

describe('locationActions', () => {
  it('should create an action for location change', () => {
    expect(changeLocation({ id: 1, name: 'Test Location' })).toMatchSnapshot();
  });
});
