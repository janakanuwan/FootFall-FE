const isNumber = value => typeof value === 'number';

/**
 *
 * @param oldRange {object} with from and to property
 * @param newRange {object} with from and to property
 * @return {{from: number, to: number}}
 */
const updatedRange = (oldRange, newRange) => {
  const oldFrom = oldRange.from;
  const oldTo = oldRange.to;
  const newFrom = newRange.from;
  const newTo = newRange.to;

  let from;
  let to;

  if (isNumber(oldFrom)) {
    from = oldFrom;
  }
  if (isNumber(oldTo)) {
    to = oldTo;
  }

  if (isNumber(newFrom) && isNumber(newTo)) {
    if (newFrom <= newTo) {
      from = newFrom;
      to = newTo;
    }
  } else if (isNumber(newFrom)) {
    if (!isNumber(to) || (isNumber(to) && newFrom <= to)) {
      from = newFrom;
    }
  } else if (isNumber(newTo)) {
    if (!isNumber(from) || (isNumber(from) && from <= newTo)) {
      to = newTo;
    }
  }

  return { from, to };
};

export default { updatedRange, isNumber };
