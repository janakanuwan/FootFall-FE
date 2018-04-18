import restService from './restService';
import nock from 'nock';
import _ from 'lodash';

describe('restService', () => {

  const verifyResponse = async (response, expectedStatus, expectedBody) => {
    const res = await response;
    console.log(res);
    if (expectedStatus !== res.status || !_.isEqual(expectedBody, res.body)) {
      throw new Error(`Response '${JSON.stringify(res)}' does not match with expected status:${expectedStatus} and body:${JSON.stringify(expectedBody)}`);
    }
  };

  it('should receive a success response [GET]', () => {
    nock('http://localhost').get('/login').reply(200, { token: '1234' });

    const response = restService.makeRequest('http://localhost/login', {}, {}, '[GET][200]');
    verifyResponse(response, 200, { token: '1234' });
  });

  it('should receive a failure response [GET][Not Found]', () => {
    nock('http://localhost').get('/merchants/1').reply(404, {});

    const response = restService.makeRequest('http://localhost/merchants/1', {}, {}, '[GET][404]');
    verifyResponse(response, 404, {});
  });

  it('should receive a failure response [GET][Unexpected Error]', () => {
    const response = restService.makeRequest('http://localhost12.com', {}, {}, '[GET][520]');
    verifyResponse(response, 520, {});
  });

  it('should receive a success response [POST]', () => {
    nock('http://localhost').post('/merchants', { name: /f*/, description: /b*/ })
      .reply(201, { id: 1, name: 'foo', description: 'bar' });

    const response = restService.makeRequest('http://localhost/merchants',
      { method: 'POST' }, { name: 'foo', description: 'bar' }, '[POST][201]');

    verifyResponse(response, 201, { id: 1, name: 'foo', description: 'bar' });
  });

  [
    {
      status: 200,
      expected: true
    },
    {
      status: 201,
      expected: true
    },
    {
      status: 300,
      expected: false
    },
    {
      status: 400,
      expected: false
    },
  ].map( ({status, expected}, index) => {
    it(`should indicate response is success or not by status '${status}' (index: ${index})`, () => {
      expect(restService.isSuccessStatus(status)).toEqual(expected);
    });
  });

});
