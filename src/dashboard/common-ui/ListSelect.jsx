import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';


/**
 * @param items array of items in {id:<ID>, name: <NAME> } format
 * @param selectedItem selected item from items
 *
 * @param onSelect(item) fired at selecting a list item
 */
const ListSelect = ({ items, selectedItem, onSelect }) => {
  const menuItems = items.map((entry, index) => (
    <MenuItem key={entry.id} value={index}>
      {entry.name}
    </MenuItem>
  ));

  const handleChange = (event) => {
    if (onSelect) {
      onSelect(items[event.target.value]);
    }
  };

  return (
    <Select
      value={items.indexOf(selectedItem)}
      onChange={handleChange}
      // autoWidth
      // displayEmpty={false}
    >
      {menuItems}
    </Select>
  );
};

ListSelect.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ListSelect;
