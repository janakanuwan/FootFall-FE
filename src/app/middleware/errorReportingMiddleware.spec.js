import errorReportingMiddleware from './errorReportingMiddleware';

describe('errorReportingMiddleware', () => {
  let next, dispatch, getState, middleware;

  beforeEach(() => {
    next = jest.fn();
    dispatch = jest.fn();
    getState = jest.fn();
    middleware = errorReportingMiddleware({ dispatch, getState })(next);
  });

  it('should process action', () => {
    const sampleAction = { type: 'SAMPLE_ACTION' };
    middleware(sampleAction);

    expect(next.mock.calls).toEqual([[sampleAction]]);
  });

  it('should throw error', () => {
    next = jest.fn(() => {
      throw new Error('Test Error')
    });
    middleware = errorReportingMiddleware({ dispatch, getState })(next);

    const sampleAction = { type: 'SAMPLE_ACTION' };
    expect(middleware(sampleAction)).toThrowErrorMatchingSnapshot();
  });
});
