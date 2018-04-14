import userService from './userService';

describe('userService', () => {
  it('should fetch the user with given credentials', () => {
    const loginInfo = {email: 'hello@gmail.com', password: 'test'};

    userService.getUser(loginInfo, (response) => console.log('getUser-response:', response));
  });
});

