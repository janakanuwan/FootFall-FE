/**
 * see {@link Entry}
 */

/**
 *
 * @param entries {List} entries with properties 'locationId', 'time'
 * @param location {object} required location wih property 'id'
 * @param fromTime {number} time >= fromTime
 * @param toTime {number} time < toTime
 *
 * @return {List} filtered list
 */
const filteredEntries = (entries, location, fromTime, toTime) =>
  entries.filter(entry =>
    entry.locationId === location.id && entry.time >= fromTime && entry.time < toTime);

/**
 *
 * @param entries {List} entries with properties 'entry' and 'exit' counts
 * @return {number} net entry (summation)
 */
const netEntry = entries =>
  entries.reduce((count, entry) => (count + entry.entry) - entry.exit, 0);

export default { filteredEntries, netEntry };
