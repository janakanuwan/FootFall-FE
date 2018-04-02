import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

import CountChart from '../../common-ui/CountChart';
import DateTextField from "../../common-ui/DateTextField";


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


const styles = (theme) => ({
  graphCount: {
    padding: theme.spacing.unit * 2,
    backgroundColor: '#FAFAFA'
  }
});

/**
 *
 * @param props.graphData data array for chart in [{name:string, IN: number, OUT: number, PRESENCE: number },...] format
 * @param props.displayTypeData {in: boolean, out: boolean, presence: boolean}
 * @param props.onClickDisplayType({type: 'IN|OUT|PRESENCE'}) fired at clicking IN, OUT or PRESENCE
 * @param props.displayOptions array of data in {id:ID, name: NAME} format [e.g. Hourly, Day, Month]
 * @param props.selectedDisplayOption
 * @param props.onClickDisplayOption(option)
 * @param props.fromDate
 * @param props.fromDateMax
 * @param props.toDate
 * @param props.toDateMin
 * @param props.onChangeFromDate (date{string})  fired at changing 'From' date
 * @param props.onChangeToDate (date{string})  fired at changing 'To' date
 *
 */
const GraphCount = (props) => {

  const {
    graphData,

    displayTypeData,
    onClickDisplayType,

    displayOptions,
    selectedDisplayOption,
    onClickDisplayOption,

    fromDate,
    fromDateMax,
    toDate,
    toDateMin,
    onChangeFromDate,
    onChangeToDate,

    classes
  } = props;

  return (
    <div>
      <Paper elevation={8} className={classes.graphCount}>
        <Grid container justify="space-between" alignItems="center" direction="row">

          <Grid item xs={8}>
            {/*NOTE: DO NOT CHANGE the names of buttons*/}
            {['in', 'out', 'presence'].map((value) =>
              <DisplayButton key={value} selected={displayTypeData[value]}
                             onClick={onClickDisplayType}>{value.toUpperCase()}</DisplayButton>
            )}
          </Grid>

          <Grid item xs>
            {/*<ButtonSelectGroup size="small"*/}
            {/*items={displayOptions}*/}
            {/*selectedItem={selectedDisplayOption}*/}
            {/*onClick={onClickDisplayOption}*/}
            {/*/>*/}

            <DateTextField label={'From'} date={fromDate} max={fromDateMax} onChange={onChangeFromDate}/>
            <DateTextField label={'To'} date={toDate} min={toDateMin} onChange={onChangeToDate}/>
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
      name: PropTypes.string.isRequired,
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

  displayOptions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  selectedDisplayOption: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClickDisplayOption: PropTypes.func.isRequired,

  fromDate: PropTypes.string.isRequired,
  fromDateMax: PropTypes.string,
  toDate: PropTypes.string.isRequired,
  toDateMin: PropTypes.string,
  onChangeFromDate: PropTypes.func.isRequired,
  onChangeToDate: PropTypes.func.isRequired,
};

export default withStyles(styles)(GraphCount);



