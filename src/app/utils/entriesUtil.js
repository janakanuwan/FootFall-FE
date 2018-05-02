/**
 * see {@link Entry}
 */

/**
 *
 * @param entries {List} entries with properties 'locationId', 'time'
 * @param location {object} required location wih property 'id'
 * @param fromTime {number} time >= fromTime
 * @param toTime {number} time < toTime (NOTE: toTime is exclusive)
 *
 * @return {List} filtered list
 */
const filteredEntries = (entries, location, fromTime, toTime) =>
  entries.filter(entry =>
    entry.locationId === location.id && entry.time >= fromTime && entry.time < toTime);

/**
 *
 * @param entries {List} entries with properties 'locationId', 'time'
 * @param fromTime {number} time >= fromTime
 * @param toTime {number} time < toTime (NOTE: toTime is exclusive)
 *
 * @return {List} filtered list
 */
const filteredEntriesByTime = (entries, fromTime, toTime) =>
  entries.filter(entry => entry.time >= fromTime && entry.time < toTime);

/**
 *
 * @param entries {List} entries with properties 'entry' and 'exit' counts
 * @return {number} net entry (summation)
 */
const netEntry = entries =>
  entries.reduce((count, item) => (count + item.entry) - item.exit, 0);

/**
 *
 * @param entries {List} entries with properties 'entry' and 'exit' counts
 * @return {number} total count of 'entry'
 */
const sumEntry = entries =>
  entries.reduce((count, item) => count + item.entry, 0);

/**
 *
 * @param entries {List} entries with properties 'entry' and 'exit' counts
 * @return {number} total count of 'exit'
 */
const sumExit = entries =>
  entries.reduce((count, item) => count + item.exit, 0);

export default {
  filteredEntries,
  filteredEntriesByTime,
  netEntry,
  sumEntry,
  sumExit,
};
