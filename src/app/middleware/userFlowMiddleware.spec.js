import userFlowMiddleware from './userFlowMiddleware';
import { fetchUser } from "../../auth/authActions";
import { HIDE_OVERLAY, SET_USER, SHOW_OVERLAY } from "../../const/action-types";
import { OVERLAY_DATA_FETCH_USER } from "../const/overlay-data";
import apiEndpoints from '../repository/const/api-end-points';
import nock from 'nock';

describe('userFlowMiddleware', () => {

  let next, dispatch, getState, middleware, dispatchCalls, nextCalls;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn();
    middleware = userFlowMiddleware({ dispatch, getState })(next);

    dispatchCalls = dispatch.mock.calls;
    nextCalls = next.mock.calls;
  });

  it('should ignore unsupported actions', () => {
    const action = { type: 'SAMPLE_ACTION' };
    middleware(action);

    expect(dispatchCalls.length).toBe(0);
    expect(nextCalls).toEqual([[action]]);
  });

  describe('fetch user', () => {
    describe('general', () => {
      it('should dispatch SHOW_OVERLAY', () => {
        const action = fetchUser({ email: 'hello@test.com', password: 'test' });
        middleware(action);

        expect(dispatchCalls[0]).toEqual([{ type: SHOW_OVERLAY, payload: OVERLAY_DATA_FETCH_USER }]);
      });
    });

    describe('success', () => {
      beforeEach(() => {
        nock(apiEndpoints.endpointLogin()).post('', { email: /.*/, password: /.*/ }).reply(
          200, {
            token: '4321',
            settings: { id: 1, name: 'Hello Test', email: 'hellotest@gmail.com', lastLoginTime: 1523324002458 }
          }
        );
      });

      it('should dispatch SET_USER and HIDE_OVERLAY', () => {
        // nock.recorder.rec();

        const action = fetchUser({ email: 'hello@test.com', password: 'test' });
        // FIXME
        middleware(action).then(() => {
            expect(dispatchCalls[1]).toEqual([{ type: SET_USER }]);
            expect(dispatchCalls[2]).toEqual([{ type: HIDE_OVERLAY, payload: OVERLAY_DATA_FETCH_USER }]);
          }
        );

      });

      // FIXME: add remaining
    });

  });

});
