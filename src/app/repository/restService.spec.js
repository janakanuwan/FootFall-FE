import restService from './restService';

describe('restService', () => {
  const types = {
    success: (payload) => console.log('success- payload:', payload),
    failure: (payload) => console.log('failure- payload:', payload),
    request: (payload) => console.log('request- payload:', payload),
  };

  it('should receive a success response [GET]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts/1', {}, {}, '[GET][200]');
  });

  it('should receive a failure response [GET][Not Found]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts/101', {}, {}, '[GET][404]');
  });

  it('should receive a failure response [GET][Unexpected Error]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode1.com', {}, {}, '[GET][520]');
  });

  it('should receive a success response [POST]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts',
      { method: 'POST' }, { title: 'foo', body: 'bar', userId: 1 }, '[POST][201]');
  });


});
