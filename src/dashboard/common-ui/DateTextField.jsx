import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import moment from 'moment';

const today = () => {
  return moment().format('YYYY-MM-DD');
};

/**
 *
 * @param props.label label (and name) of the text field
 * @param props.date{string} value of the text field (default: today)
 *
 * @param props.min {string}
 * @param props.max {string} (default: today)
 *
 * @param props.onChange(date{string})  fired at changing date
 *
 * @see https://github.com/dmtrKovalenko/material-ui-pickers
 * @see https://github.com/gpbl/react-day-picker
 */
const DateTextField = (props) => {

  const handleChange = (event) => {
    const selectedDate = event.target.value;
    if (props.onChange) {
      props.onChange(selectedDate);
    }
  };

  return (
    <TextField
      {...props}
      id={props.label + '-date'}
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
      onChange={handleChange}
    />
  );
};

DateTextField.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func
};

DateTextField.defaultProps = {
  date: today(),
  max: today()
};

export default DateTextField;
