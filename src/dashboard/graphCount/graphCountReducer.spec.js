import reducer from './graphCountReducer';

import {changeGraphDisplayType, setGraphData} from "./graphCountActions";
import {GraphData, List} from 'Models';

describe('graphReducer', () => {

  const initialState = reducer(undefined, {type: 'INIT'});

  it('should set the state with default values', () => {
    const expected = {
      displayTypeData: {in: true, out: true, presence: true},
      graphData: []
    };

    expect(initialState.toJS()).toEqual(expected);
  });

  it('should change the displayTypeData based on changeDisplayType', () => {
    const expected1 = {in: false, out: true, presence: true};
    const nextState1 = reducer(initialState, changeGraphDisplayType('IN'));
    expect(nextState1.get('displayTypeData').toJS()).toEqual(expected1);


    const expected2 = {in: true, out: true, presence: true};
    const nextState2 = reducer(nextState1, changeGraphDisplayType('IN'));
    expect(nextState2.get('displayTypeData').toJS()).toEqual(expected2);

    const expected3 = {in: true, out: false, presence: true};
    const nextState3 = reducer(nextState2, changeGraphDisplayType('OUT'));
    expect(nextState3.get('displayTypeData').toJS()).toEqual(expected3);

    const expected4 = {in: true, out: true, presence: true};
    const nextState4 = reducer(nextState3, changeGraphDisplayType('OUT'));
    expect(nextState4.get('displayTypeData').toJS()).toEqual(expected4);

    const expected5 = {in: true, out: true, presence: false};
    const nextState5 = reducer(nextState4, changeGraphDisplayType('PRESENCE'));
    expect(nextState5.get('displayTypeData').toJS()).toEqual(expected5);
  });

  it('should set the graph data', () => {
    const expected = [
      {name: 'Test1', IN: 1, OUT: 1, PRESENCE: 0},
      {name: 'Test2', IN: 2, OUT: 0, PRESENCE: 2},
    ];

    let graphDataList = List(GraphData)();
    expected.forEach((value) => {
      graphDataList = graphDataList.push(value)
    });

    const action = setGraphData(graphDataList);

    expect(reducer(initialState, action).get('graphData').toJS()).toEqual(expected);
  });

  it('should not change the state for unsupported action', () => {
    const action = {type: 'UNSUPPORTED_ACTION_TYPE'};

    expect(reducer(initialState, action)).toBe(initialState);
  });
});
