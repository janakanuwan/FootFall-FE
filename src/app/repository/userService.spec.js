import userService from './userService';
import nock from 'nock';
import apiEndpoints from './const/api-end-points';

describe('userService', () => {

  it('should fetch the user with given credentials', () => {
    nock(apiEndpoints.endpointLogin()).post('', { email: /.*/, password: /.*/ }).reply(
      200, {
        token: 'asdc',
        settings: { id: 1, name: 'Hello Test', email: 'hellotest@gmail.com', lastLoginTime: 1523324002458 }
      }
    );

    const loginInfo = { email: 'hello@gmail.com', password: 'test' };
    return userService.fetchUser(loginInfo, response => {
      expect(response.token).toEqual('asdc');
      expect(response.user).not.toBeNull();
    });
  });

  it('should fetch merchants belong to given user', () => {
    nock(apiEndpoints.endpointMerchants()).get('').reply(
      200, [
        { id: 234, name: "LookRich", description: "Colombo 07" },
        { id: 235, name: "RichLook", description: "Galle" }
      ]
    );

    const authInfo = { token: '12345', userId: 1, userEmail: 'hello@gmail.com' };
    return userService.fetchMerchants(authInfo, merchants => {
      console.log(merchants);
      expect(merchants.size).toBeGreaterThan(0);
    });
  });

});

