import restService from './restService';


describe('restService', () => {
  const types = {
    request: () => console.log('request'),
    success: (payload, error) => console.log('success: payload:', payload, ', error:', error),
    failure: (payload, error) => console.log('failure: payload:', payload, ', error:', error),
  };

  it('should receive a success response [GET]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts/1');
  });

  it('should receive a failure response [GET][Not Found]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts/101');
  });

  it('should receive a failure response [GET][Unexpected Error]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode1.com');
  });

  it('should receive a success response [POST]', () => {
    restService.makeRequest(types, 'https://jsonplaceholder.typicode.com/posts',
      { method: 'POST', }, { title: 'foo', body: 'bar', userId: 1, });
  });
});
