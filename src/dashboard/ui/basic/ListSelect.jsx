import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';


/**
 * @param data array of data in {id:<ID>, name: <NAME> } format
 * @param selectedIndex array index of selected merchant
 *
 * @param onSelect(index) fired at selecting a merchant
 */
const ListSelect = ({data, selectedIndex, onSelect}) => {

  const menuItems = data.map((entry, index) =>
    <MenuItem key={entry.id} value={index}>
      {entry.name}
    </MenuItem>
  );

  return (
    <Select
      value={selectedIndex}
      onChange={(event) => onSelect(event.target.value)}
      // autoWidth
      displayEmpty={false}
    >
      {menuItems}
    </Select>
  );
};

ListSelect.propTypes = {
  data: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

ListSelect.defaultProps = {
  selectedIndex: 0
};

export default ListSelect;
