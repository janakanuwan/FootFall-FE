import responseMapper from './userServiceResponseMapper';
import { List, Location, Merchant, User } from 'Models';


describe('userResponseServiceMapper', () => {
  // FIXME
  // throw ('NEED TO IMPLEMENT');

  it('should map user \'fetchUserSuccess\'', () => {
    const body = {
      token: "1234",
      settings: {
        id: 1,
        name: "Hello Test",
        email: "hellotest@gmail.com",
        lastLoginTime: 1523324002458
      }
    };

    const expected = {
      token: '1234',
      user: { "id": 1, "email": "hellotest@gmail.com", "name": "Hello Test", "lastLoginTime": 1523324002458 }
    };

    const result = responseMapper.fetchUserSuccess({ body });
    expect(result.token).toEqual(expected.token);
    expect(result.user).toBeInstanceOf(User);
    expect(result.user.toJS()).toEqual(expected.user);
  });

  it('should map merchants \'fetchMerchantSuccess\'', () => {
    const body = [
      {
        "id": 234,
        "name": "LookRich",
        "description": "Colombo 07"
      },
      {
        "id": 235,
        "name": "RichLook",
        "description": "Galle"
      }
    ];

    const result = responseMapper.fetchMerchantsSuccess({ body });
    expect(result).toBeInstanceOf(List);
    expect(result.get(0)).toBeInstanceOf(Merchant);
    expect(result.toJS()).toEqual(body);
  });


  it('should map locations data \'fetchLocationsSuccess\'', () => {
    const body = [
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
            subLocations: [
              {
                id: 127,
                name: "1st Floor",
                description: null,
                merchantId: 234,
                subLocations: []
              }
            ]
          }
        ]
      },
      {
        id: 567,
        name: "Galle",
        description: "Near the main entrance",
        merchantId: 235,
        subLocations: []
      }
    ];

    const expected = [
      { id: 124, name: "Colombo 07", description: null, merchantId: 234, parentId: null },
      { id: 125, name: "3rd Floor", description: null, merchantId: 234, parentId: 124 },
      { id: 126, name: "2nd Floor", description: null, merchantId: 234, parentId: 124 },
      { id: 127, name: "1st Floor", description: null, merchantId: 234, parentId: 126 },
      { id: 567, name: "Galle", description: "Near the main entrance", merchantId: 235, parentId: null }
    ];

    const result = responseMapper.fetchLocationsSuccess({ body });
    expect(result).toBeInstanceOf(List);
    expect(result.get(0)).toBeInstanceOf(Location);
    expect(result.toJS()).toEqual(expected);
  });

});
