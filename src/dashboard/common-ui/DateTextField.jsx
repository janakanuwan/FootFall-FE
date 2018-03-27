import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

import moment from 'moment';

const today = () => {
  return moment().format('YYYY-MM-DD');
};

const formatDate = (date) => {
  if (date === undefined || date === null) {
    return date;
  } else {
    return moment(date).format('YYYY-MM-DD');
  }
};

/**
 *
 * @param props.label label (and name) of the text field
 * @param props.date{string|Date} value of the text field (default: today)
 *
 * @param props.min {string|Date}
 * @param props.max {string|Date} (default: today)
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
      defaultValue={formatDate(props.date)}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: formatDate(props.min),
        max: formatDate(props.max)
      }}
      onChange={handleChange}
    />
  );
};

DateTextField.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onChange: PropTypes.func
};

DateTextField.defaultProps = {
  date: today(),
  max: today()
};

export default DateTextField;
