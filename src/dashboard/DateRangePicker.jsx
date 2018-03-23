import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import {formatDate, today} from "./DateRangePickerHelper";

/**
 * @param props.onChange(event) fired at changing date
 */
const DateTextField = (props) => {
  return (
    <TextField
      {...props}
      id={props.label+'-date'}
      name={props.label}
      label={props.label}
      type="date"
      defaultValue={props.date}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: props.min,
        max: props.max
      }}
      onChange={props.onChange}
    />
  );
};

DateTextField.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func
};

DateTextField.defaultProps = {
  date: today(),
  max: today()
};

/**
 * @param props.fromDate start date
 * @param props.toDate end date
 *
 * @param props.onChange({fromDate, toDate}) fired at date change
 *
 * @param props.min minimum date selectable
 * @param props.max maximum date selectable
 *
 * @see https://github.com/dmtrKovalenko/material-ui-pickers
 * @see https://github.com/gpbl/react-day-picker
 */
class DateRangePicker extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      fromDate: formatDate(props.fromDate),
      toDate:formatDate(props.toDate)
    };

    this.minString = formatDate(props.min);
    this.maxString = formatDate(props.max);
  }

  handleChange(data){
    // TODO: validate fromDate <= toDate
    this.setState(data);
    this.props.onChange({
      fromDate: new Date(this.state.fromDate),
      toDate: new Date(this.state.toDate)
    });
  }

  render() {
    const {fromDateValue, toDateValue} = this.state;
    const minValue = this.minString;
    const maxValue= this.maxString;

    return (
      <div>
        <DateTextField
          label={'From'}
          date={fromDateValue}
          onChange={(event) => this.handleChange({fromDate: event.target.value})}
          min={minValue}
          max={maxValue}
        />
        <br/>
        <DateTextField
          label={'To'}
          date={toDateValue}
          onChange={(event) => this.handleChange({toDate: event.target.value})}
          min={minValue}
          max={maxValue}
        />
      </div>
    );
  }
}

DateRangePicker.propTypes = {
  fromDate: PropTypes.instanceOf(Date).isRequired,
  toDate: PropTypes.instanceOf(Date).isRequired,
  min: PropTypes.instanceOf(Date),
  max: PropTypes.instanceOf(Date),
  onChange: PropTypes.func
};

export {DateTextField};
export default DateRangePicker;

