import immutableUtil from './immutableUtil';
import { List, Record } from 'Models';

describe('immutableUtil', () => {

  const Item = Record({ id: Number });

  [
    {
      oldList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      newList: [{ id: 3 }, { id: 4 }, { id: 5 }],
      updatedList: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
    },
    {
      oldList: [],
      newList: [{ id: 3 }, { id: 4 }, { id: 5 }],
      updatedList: [{ id: 3 }, { id: 4 }, { id: 5 }]
    },
    {
      oldList: [{ id: 1 }, { id: 2 }, { id: 3 }],
      newList: [],
      updatedList: [{ id: 1 }, { id: 2 }, { id: 3 }]
    },
  ].map(({ oldList, newList, updatedList }, index) => {
    it(`should return the 'unionList' (index:${index})`, () => {
      expect(immutableUtil.unionList(List(Item)(oldList), List(Item)(newList)).toJS()).toEqual(updatedList);
    });
  });

});
