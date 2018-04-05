import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

import CountChart from '../../common-ui/CountChart';
import DateTextField from "../../common-ui/DateTextField";
import ButtonSelectGroup from '../../common-ui/ButtonSelectGroup';

import {GraphDateRangeTypes, GraphDisplayOptions, GraphDisplayTypes} from '../graphCountConstants';

const DisplayButton = ({children, selected, onClick}) => {
  return (
    <Button
      size="small"
      variant={selected ? "raised" : "flat"}
      onClick={() => onClick({displayType: children})}
      children={children}
    />
  );
};

DisplayButton.propTypes = {
  children: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

const GraphOptionItems = GraphDisplayOptions.map((value, index) => ({
  id: index,
  name: value
}));

const styles = (theme) => ({
  graphCount: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#FAFAFA'
  }
});


/**
 *
 * @param props.graphData data array for chart in [{NAME:<string>, IN:<number>, OUT: <number>, PRESENCE: <number> ,...] format
 * @param props.displayTypeData {in: boolean, out: boolean, presence: boolean}
 * @param props.onClickDisplayType({displayType: 'in|out|presence'}) fired at clicking IN, OUT or PRESENCE
 * @param props.selectedDisplayOption {@link GraphDisplayOptions}
 * @param props.onClickDisplayOption(option)
 * @param props.dateRange {fromDate: string, fromDateMax: string, toDate: string, toDateMax: string}
 * @param props.onChangeDate ({type: 'FROM|TO', date:string})  fired at changing From/To date
 *
 */
const GraphCount = (props) => {

  const {
    graphData,

    displayTypeData,
    onClickDisplayType,

    selectedDisplayOption,
    onClickDisplayOption,

    dateRange,
    onChangeDate,

    classes
  } = props;


  return (
    <div>
      <Paper elevation={8} className={classes.graphCount}>
        <Grid container justify="space-between" alignItems="center" direction="row">

          <Grid item xs={8}>
            {GraphDisplayTypes.map((value) =>
              <DisplayButton key={value} selected={displayTypeData[value]}
                             onClick={onClickDisplayType}>{value}</DisplayButton>
            )}
          </Grid>

          <Grid item xs>

            <ButtonSelectGroup
              size="small" maxButtonCount={5}
              items={GraphOptionItems}
              selectedItem={GraphOptionItems.find(option => option.name === selectedDisplayOption)}
              onClick={(option) => onClickDisplayOption(option.name)}
            />
            <br/>

            {GraphDateRangeTypes.map((value) =>
              <DateTextField key={value} label={value.toUpperCase()} date={dateRange[`${value}Date`]}
                             max={dateRange[`${value}DateMax`]} min={dateRange[`${value}DateMin`]}
                             onChange={(date) => onChangeDate({type: value, date})}
              />
            )}

          </Grid>

        </Grid>

        <CountChart data={graphData}
                    displayIn={displayTypeData.in}
                    displayOut={displayTypeData.out}
                    displayPresence={displayTypeData.presence}
                    width="90%"
        />
      </Paper>
    </div>
  );
};

GraphCount.propTypes = {
  graphData: PropTypes.arrayOf(
    PropTypes.shape({
      NAME: PropTypes.string.isRequired,
      IN: PropTypes.number.isRequired,
      OUT: PropTypes.number.isRequired,
      PRESENCE: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,

  displayTypeData: PropTypes.shape({
    in: PropTypes.bool.isRequired,
    out: PropTypes.bool.isRequired,
    presence: PropTypes.bool.isRequired,
  }).isRequired,
  onClickDisplayType: PropTypes.func.isRequired,

  selectedDisplayOption: PropTypes.string.isRequired,
  onClickDisplayOption: PropTypes.func.isRequired,

  dateRange: PropTypes.shape({
    fromDate: PropTypes.string.isRequired,
    toDate: PropTypes.string.isRequired,
    fromDateMax: PropTypes.string,
    toDateMin: PropTypes.string,
    fromDateMin: PropTypes.string,
    toDateMax: PropTypes.string
  }).isRequired,
  onChangeDate: PropTypes.func.isRequired,
};

export default withStyles(styles)(GraphCount);



