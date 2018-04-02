import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import {withStyles} from 'material-ui/styles';

import CountChart from '../../common-ui/CountChart';
import ButtonSelectGroup from "../../common-ui/ButtonSelectGroup";
import DateTextField from "../../common-ui/DateTextField";


const DisplayButton = ({children, selected, onClick}) => {
  return (
    <Button
      size="small"
      variant={selected ? "raised" : "flat"}
      onClick={() => onClick({value: children})}
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
 * @param props.graphData data array for chart in [{name:String, IN: Number, OUT: Number, PRESENCE: Number },...] format
 * @param props.displayTypeIn if true, display IN data
 * @param props.displayTypeOut if true, display OUT data
 * @param props.displayTypePresence if true, display PRESENCE data
 * @param props.onClickDisplayType({value: 'IN|OUT|PRESENCE'}) fired at clicking IN, OUT or PRESENCE
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

    displayTypeIn, displayTypeOut, displayTypePresence,
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
            <DisplayButton selected={displayTypeIn} onClick={onClickDisplayType}>IN</DisplayButton>
            <DisplayButton selected={displayTypeOut} onClick={onClickDisplayType}>OUT</DisplayButton>
            <DisplayButton selected={displayTypePresence} onClick={onClickDisplayType}>PRESENCE</DisplayButton>
          </Grid>

          <Grid item xs>
            <ButtonSelectGroup size="small"
                               items={displayOptions}
                               selectedItem={selectedDisplayOption}
                               onClick={onClickDisplayOption}
            />

            <DateTextField label={'From'} date={fromDate} max={fromDateMax} onChange={onChangeFromDate}/>
            <DateTextField label={'To'} date={toDate} min={toDateMin} onChange={onChangeToDate}/>
          </Grid>

        </Grid>
        <CountChart data={graphData}
                    displayIn={displayTypeIn} displayOut={displayTypeOut} displayPresence={displayTypePresence}
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

  displayTypeIn: PropTypes.bool.isRequired,
  displayTypeOut: PropTypes.bool.isRequired,
  displayTypePresence: PropTypes.bool.isRequired,
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



