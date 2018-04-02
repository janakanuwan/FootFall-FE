import {changeGraphDisplayType, setGraphData,} from "./graphCountActions";

describe('graphActions', () => {
  it('should create an action to change graph display type', () => {
    expect(changeGraphDisplayType('IN')).toMatchSnapshot();
  });

  it('should create an action to set graph data', () => {
    expect(setGraphData([{name: 'Hello', IN: 1, OUT: 1, PRESENCE: 0}])).toMatchSnapshot();
  });
});
