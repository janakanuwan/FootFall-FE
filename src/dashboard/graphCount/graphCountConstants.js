/**
 * NOTE: This values depends on {@link GraphDisplayTypeData}
 * @type {string[]}
 */
export const GraphDisplayTypes = ['in', 'out', 'presence' ];

/**
 * NOTE: These values depend on {@link GraphDateRange}
 * @type {string[]}
 */
export const GraphDateRangeTypes = ['from', 'to'];

/**
 * Graph Display Option values
 * @type {string[]}
 */
export const GraphDisplayOptions = ['hourly', 'day', 'week', 'month'];

export const GraphOptionItems = GraphDisplayOptions.map((value, index) => ({
  id: index,
  name: value
}));
