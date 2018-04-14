import repositoryUtil from './repositoryUtil';

describe('repositoryUtil', () => {

  [
    {
      obj: {},
      expected: true,
    },
    {
      obj: { v: 'v'},
      expected: false,
    },
    {
      obj: undefined,
      expected: undefined,
    },
    {
      obj: null,
      expected: null,
    },
  ].map(({obj, expected}, index) => {
    it(`should return emptiness of an object '${obj}' (index:${index})`, () => {
      expect(repositoryUtil.isEmpty(obj)).toEqual(expected);
    });
  });

  [
    {
      text: 'SERVICE UNAVAILABLE',
      expected: 'Service Unavailable',
    },
    {
      text: 'Invalid user',
      expected: 'Invalid User',
    },
    {
      text: {},
      expected: '',
    },
    {
      text: undefined,
      expected: '',
    },
    {
      text: null,
      expected: '',
    },
  ].map(({text, expected}, index) => {
    it(`should convert '${text}' to title case (index:${index})`, () => {
      expect(repositoryUtil.toTitleCase(text)).toEqual(expected);
    });
  });

});
