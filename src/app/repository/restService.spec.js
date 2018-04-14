import restService from './restService';

describe('restService', () => {

  const log = async (data) => {
    await data;
    console.log(data);
  };

  it('should receive a success response [GET]', () => {
    const response = restService.makeRequest('https://jsonplaceholder.typicode.com/posts/1', {}, {}, '[GET][200]');
    log(response);
  });

  it('should receive a failure response [GET][Not Found]', () => {
    const response = restService.makeRequest('https://jsonplaceholder.typicode.com/posts/101', {}, {}, '[GET][404]');
    log(response);
  });

  it('should receive a failure response [GET][Unexpected Error]', () => {
    const response = restService.makeRequest('https://jsonplaceholder.typicode1.com', {}, {}, '[GET][520]');
    log(response);
  });

  it('should receive a success response [POST]', () => {
    const response = restService.makeRequest('https://jsonplaceholder.typicode.com/posts',
      { method: 'POST' }, { title: 'foo', body: 'bar', userId: 1 }, '[POST][201]');
    log(response);
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
