import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

/**
 *
 * @param label label (and name) of the text field
 * @param date{string} value of the text field (default: today)
 *
 * @param min {string}
 * @param max {string} (default: today)
 *
 * @param onChange(date{string})  fired at changing date
 *
 * @param error {bool}
 *
 * @see https://github.com/dmtrKovalenko/material-ui-pickers
 * @see https://github.com/gpbl/react-day-picker
 */
const DateTextField = ({
  label,
  date,
  min,
  max,
  onChange,
  error,
}) => {
  const handleChange = (event) => {
    const selectedDate = event.target.value;
    if (onChange) {
      onChange(selectedDate);
    }
  };

  return (
    <TextField
      id={`${label}-date`}
      name={label}
      label={label}
      type="date"
      defaultValue={date}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min,
        max,
      }}
      onChange={handleChange}
      error={error}
    />
  );
};

DateTextField.propTypes = {
  label: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

DateTextField.defaultProps = {
  min: null,
  max: null,
  error: false,
};

export default DateTextField;
