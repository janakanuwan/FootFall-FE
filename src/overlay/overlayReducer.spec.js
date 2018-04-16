import reducer from './overlayReducer';
import { hideOverlay, showOverlay } from "./overlayActions";

describe('overlayReducer', () => {

  const initialState = reducer(undefined, { type: 'INIT' });

  const overlayData1 = { id: 'login_overlay', title: 'Loading ...', message: 'Authenticating ...\n Please wait ...' };
  const overlayData2 = { id: 'fetch_overlay', title: 'Loading ...', message: 'System is loading ...' };

  it('should set overlay', () => {
    const action = showOverlay(overlayData1);
    const expected = [overlayData1];

    expect(reducer(initialState, action).get('list').toJS()).toEqual(expected);
  });

  it('should set multiple overlays', () => {
    const baseState = reducer(initialState, showOverlay(overlayData1));
    const action = showOverlay(overlayData2);
    const expected = [overlayData1, overlayData2];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should not set multiple overlay for same id (but latest one)', () => {
    const baseState = reducer(initialState, showOverlay(overlayData1));
    const overlayData1_updated = Object.assign({}, overlayData1, { message: 'Authenticating...' });

    const action = showOverlay(overlayData1_updated);
    const expected = [overlayData1_updated];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should remove overlay', () => {
    const baseState = reducer(initialState, showOverlay(overlayData1));
    const action = hideOverlay({ id: overlayData1.id });
    const expected = [];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should remove one overlay', () => {
    const baseState = reducer(reducer(initialState, showOverlay(overlayData1)), showOverlay(overlayData2));
    const action = hideOverlay({ id: overlayData1.id });
    const expected = [overlayData2];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should remove overlay when id does not match', () => {
    const baseState = reducer(initialState, showOverlay(overlayData1));
    const action = hideOverlay({ id: overlayData2.id });
    const expected = [overlayData1];

    expect(reducer(baseState, action).get('list').toJS()).toEqual(expected);
  });

  it('should not remove overlay when there is none', () => {
    const action = hideOverlay({ id: overlayData1.id });
    const expected = [];

    expect(reducer(initialState, action).get('list').toJS()).toEqual(expected);
  });

  it('should not change the state for unknown action', () => {
    const action = { type: 'UNSUPPORTED_ACTION_TYPE' };

    expect(reducer(initialState, action)).toBe(initialState);
  });

});
