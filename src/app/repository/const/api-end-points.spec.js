import apiEndpoints from './api-end-points';

describe('api-end-points', () => {

  const TEST_BASE_URL = 'http://localhost:3004';

  it('should match the BASE_URL', () => {
    expect(apiEndpoints.BASE_URL).toEqual(TEST_BASE_URL);
  });

  it('should match the login url', () => {
    expect(apiEndpoints.login()).toEqual(TEST_BASE_URL + '/login');
  });

  [
    {
      merchantId: undefined,
      expected: '/merchants',
    },
    {
      merchantId: 0,
      expected: '/merchants',
    },
    {
      merchantId: 100,
      expected: '/merchants/100',
    },
  ].map(({ merchantId, expected }) => {
    it(`should match the merchants end point (merchantId: ${merchantId})`, () => {
      expect(apiEndpoints.merchants(merchantId)).toEqual(TEST_BASE_URL + expected);
    });
  });

  [
    {
      merchantId: 12,
      locationId: undefined,
      expected: '/merchants/12/locations'
    },
    {
      merchantId: 12,
      locationId: 0,
      expected: '/merchants/12/locations'
    },
    {
      merchantId: 12,
      locationId: 1233,
      expected: '/merchants/12/locations/1233'
    },
  ].map(({ merchantId, locationId, expected }) => {
    it(`should match the locations end point (merchantId: ${merchantId}, locationId: ${locationId})`, () => {
      expect(apiEndpoints.locations(merchantId, locationId)).toEqual(TEST_BASE_URL + expected);
    });
  });


  [
    {
      merchantId: 12,
      locationId: 1,
      id: undefined,
      expected: '/merchants/12/locations/1/entries'
    },
    {
      merchantId: 12,
      locationId: 1,
      id: 0,
      expected: '/merchants/12/locations/1/entries'
    },
    {
      merchantId: 12,
      locationId: 1,
      id: 2,
      expected: '/merchants/12/locations/1/entries/2'
    },
  ].map(({ merchantId, locationId, id, expected }) => {
    it(`should match the entries end point (merchantId: ${merchantId}, locationId: ${locationId}, id: ${id})`, () => {
      expect(apiEndpoints.entries(merchantId, locationId, id)).toEqual(TEST_BASE_URL + expected);
    });
  });

});
