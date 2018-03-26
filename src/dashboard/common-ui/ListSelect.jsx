import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';


/**
 * @param data array of data in {id:<ID>, name: <NAME> } format
 * @param selectedIndex array index of selected merchant
 *
 * @param onSelect({item, index}) fired at selecting a list item
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
      onChange={(event) => onSelect({item: data[event.target.value], index: event.target.value})}
      // autoWidth
      displayEmpty={false}
    >
      {menuItems}
    </Select>
  );
};

ListSelect.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

ListSelect.defaultProps = {
  selectedIndex: 0
};

export default ListSelect;
