import {
  changeGraphDateRange,
  changeGraphDisplayOption,
  changeGraphDisplayType,
  setGraphData,
} from "./graphCountActions";

describe('graphActions', () => {
  it('should create an action to change graph display type', () => {
    expect(changeGraphDisplayType('IN')).toMatchSnapshot();
  });

  it('should create an action to set graph data', () => {
    expect(setGraphData([{name: 'Hello', IN: 1, OUT: 1, PRESENCE: 0}])).toMatchSnapshot();
  });

  it('should create an action to change the graph date range', () => {
    expect(changeGraphDateRange({type: 'FROM', date: '2018-04-04'})).toMatchSnapshot();
  });

  it('should create an action to change the graph display option', () => {
    expect(changeGraphDisplayOption('day')).toMatchSnapshot();
  });
});
