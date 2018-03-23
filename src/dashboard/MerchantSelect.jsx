import React from 'react';
import PropTypes from 'prop-types';
import Select from 'material-ui/Select';
import {MenuItem} from 'material-ui/Menu';


/**
 * @param merchants array of merchant details (each merchant should have 'id' and 'name' property)
 * @param selectedIndex array index of selected merchant
 *
 * @param onSelect(index) fired at selecting a merchant
 */
const MerchantSelect = ({merchants, selectedIndex, onSelect}) => {

  const menuItems = merchants.map((merchant, index) =>
    <MenuItem key={merchant.id} value={index}>
      {merchant.name}
    </MenuItem>
  );

  return (
    <Select
      value={selectedIndex}
      onChange={(event) => onSelect(event.target.value)}
      // autoWidth
    >
      {menuItems}
    </Select>
  );
};

MerchantSelect.propTypes = {
  merchants: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default MerchantSelect;
