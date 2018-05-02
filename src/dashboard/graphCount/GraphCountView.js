import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import GraphCount from './ui/GraphCount';
import { changeGraphDateRange, changeGraphDisplayOption, changeGraphDisplayType } from './graphCountActions';
import graphCountManager from './graphCountManager';

const getEntriesList = state => state.getIn(['dashboard', 'entries', 'list']);
const getSelectedLocation = state => state.getIn(['dashboard', 'locations', 'selected']);
const getGraphCountDateRange = state => state.getIn(['dashboard', 'graphCount', 'dateRange']);
const getSelectedDisplayOption = state => state.getIn(['dashboard', 'graphCount', 'displayOption']);
const getDisplayTypeData = state => state.getIn(['dashboard', 'graphCount', 'displayTypeData']);

const graphDataSelector = createSelector(
  [getEntriesList, getSelectedLocation, getGraphCountDateRange, getSelectedDisplayOption],
  (entries, location, dateRange, displayOption) =>
    graphCountManager.computedGraphData(entries, location, dateRange, displayOption),
);

const mapStateToProps = state => ({
  graphData: graphDataSelector(state),
  displayTypeData: getDisplayTypeData(state),
  dateRange: getGraphCountDateRange(state),
  selectedDisplayOption: getSelectedDisplayOption(state),
});

const mapStateToDispatch = dispatch => ({
  onClickDisplayType: ({ displayType }) => dispatch(changeGraphDisplayType(displayType)),
  onChangeDate: graphDateRange => dispatch(changeGraphDateRange(graphDateRange)),
  onClickDisplayOption: displayOption => dispatch(changeGraphDisplayOption(displayOption)),
});

const GraphCountView = connect(
  mapStateToProps,
  mapStateToDispatch,
)(GraphCount);

export default GraphCountView;
