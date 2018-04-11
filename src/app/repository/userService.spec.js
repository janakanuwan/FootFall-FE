import userService from './userService';

describe('userService', () => {
  it('should fetch the user with given credentials', () => {
    const loginInfo = {email: 'hello@gmail.com', password: 'test'};

    const types = {
      request: (payload) => console.log('getUser-request: ', payload),
      success: (user) => console.log('getUser-success: ', user),
      failure: (error) => console.log('getUser-failure: ', error),
    };

    userService.getUser(types, loginInfo);




  });
});

