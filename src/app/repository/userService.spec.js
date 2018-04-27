import userService from './userService';
import nock from 'nock';
import apiEndpoints from './const/api-end-points';
import { Entry, Location, Merchant, User } from 'Models';

describe('userService', () => {

  // FIXME : add failure cases

  it('should fetch the user with given credentials', () => {
    nock(apiEndpoints.login()).post('', { email: /.*/, password: /.*/ }).reply(
      200,
      {
        token: 'asdc',
        settings: { id: 1, name: 'Hello Test', email: 'hellotest@gmail.com', lastLoginTime: 1523324002458 }
      }
    );

    const loginInfo = { email: 'hello@gmail.com', password: 'test' };
    return userService.fetchUser(loginInfo, response => {
      expect(response.token).toEqual('asdc');
      expect(response.user).toBeInstanceOf(User);
    });
  });

  it('should fetch merchants belong to given user', () => {
    nock(apiEndpoints.merchants()).get('').reply(
      200,
      [
        { id: 234, name: "LookRich", description: "Colombo 07" },
        { id: 235, name: "RichLook", description: "Galle" }
      ]
    );

    const authInfo = { token: '12345', userId: 1, userEmail: 'hello@gmail.com' };
    return userService.fetchMerchants(authInfo, merchants => {
      expect(merchants.size).toEqual(2);
      expect(merchants.get(0)).toBeInstanceOf(Merchant);
    });
  });

  it('should fetch locations belong to given merchant', () => {
    nock(apiEndpoints.locations(234)).get('').reply(
      200,
      [
        {
          id: 124,
          name: "Colombo 07",
          description: null,
          merchantId: 234,
          subLocations: [
            {
              id: 125,
              name: "3rd Floor",
              description: null,
              merchantId: 234,
              subLocations: []
            },
            {
              id: 126,
              name: "2nd Floor",
              description: null,
              merchantId: 234,
              subLocations: []
            }
          ]
        }
      ]
    );

    const authInfo = { token: '12345', userId: 1, userEmail: 'hello@gmail.com', merchantId: 234 };
    return userService.fetchLocations(authInfo, locations => {
      expect(locations.size).toEqual(3);
      expect(locations.get(0)).toBeInstanceOf(Location);
    });
  });

  it('should fetch customer entries belong to given merchant & location', () => {
    nock(apiEndpoints.entries(234, 125)).get('').reply(
      200,
      [
        {
          id: 1,
          entry: 4,
          exit: 2,
          time: 1523324003458,
          locationId: 125
        },
        {
          id: 2,
          entry: 5,
          exit: 6,
          time: 1523324003558,
          locationId: 125
        }
      ]
    );

    const authInfo = { token: '12345', userId: 1, userEmail: 'hello@gmail.com', merchantId: 234, locationId: 125 };
    return userService.fetchEntries(authInfo, customerEntries => {
      expect(customerEntries.size).toEqual(2);
      expect(customerEntries.get(0)).toBeInstanceOf(Entry);
    });
  });

});

