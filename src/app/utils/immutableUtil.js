/**
 *
 * @param oldList {List} immutable item list with id property
 * @param newList {List} immutable item list with id property
 * @return {List} updated list which contains 'oldList' items with newly added items from 'newList'
 */
const unionList = (oldList, newList) => {
  const oldListIds = oldList.reduce((acc, curr) => [...acc, curr.id], []);

  return oldList.withMutations((items) => {
    newList
      .filter(item => !oldListIds.includes(item.id))
      .forEach(newLocation => items.push(newLocation));
  });
};

export default { unionList };
