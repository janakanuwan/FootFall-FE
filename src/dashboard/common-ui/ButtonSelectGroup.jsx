import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';

// style={{
//   textTransform: 'none', 'capitalize', 'uppercase'
// }}

/**
 * @param items array of data in {id:<ID>, name: <NAME> } format
 * @param selectedItem selected item from data
 *
 * @param onClick(item) fired at clicking a button
 *
 * @param maxButtonCount maximum number of items to display in-line
 * @param size size of button ('small','medium', 'large'; default: 'medium')
 */
const ButtonSelectGroup = ({
  items, selectedItem, onClick, maxButtonCount, size,
}) => {
  const handleClick = (item) => {
    if (onClick) {
      onClick(item);
    }
  };

  const MAX_BUTTON_COUNT_MINUS_1 = maxButtonCount - 1;
  const directButtons = items.slice(0, MAX_BUTTON_COUNT_MINUS_1).map(item => (
    <Button
      key={item.id}
      variant={item === selectedItem ? 'raised' : 'flat'}
      onClick={() => handleClick(item)}
      size={size}
    >
      {item.name}
    </Button>
  ));

  const itemsInSelect = items.slice(MAX_BUTTON_COUNT_MINUS_1);
  const buttonsInSelect = itemsInSelect.map((item, index) => (
    <Button
      key={item.id}
      variant={item === selectedItem ? 'raised' : 'flat'}
      size={size}

      value={index}
    >
      {item.name}
    </Button>
  ));

  const selectComponent = (itemsInSelect.length || itemsInSelect.size) === 0 ? null : (
    <Select
      value={itemsInSelect.indexOf(selectedItem)}
      onChange={event =>
        handleClick(itemsInSelect.find((val, index) => index === event.target.value))
      }
    >
      {buttonsInSelect}
    </Select>
  );

  return (
    <div>
      {directButtons}
      {selectComponent}
    </div>
  );
};

ButtonSelectGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  selectedItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  maxButtonCount: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

ButtonSelectGroup.defaultProps = {
  maxButtonCount: 4,
  size: 'medium',
};

export default ButtonSelectGroup;
