import { hideOverlay, showOverlay } from './overlayActions';

describe('overlayActions', () => {

  it('should create an action to show an overlay', () => {
    expect(showOverlay({ id: 'user_login', title: 'Loading', message: 'Validating' })).toMatchSnapshot();
  });

  it('should create an action to hide an overlay', () => {
    expect(hideOverlay({ id: 'user_login', title: 'Loading', message: 'Validating' })).toMatchSnapshot();
  });
});
