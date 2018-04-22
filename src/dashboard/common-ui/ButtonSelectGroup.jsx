import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';

// style={{
//   textTransform: 'none', 'capitalize', 'uppercase'
// }}

/**
 * @param props.items array of data in {id:<ID>, name: <NAME> } format
 * @param props.selectedItem selected item from data
 *
 * @param props.onClick(item) fired at clicking a button
 *
 * @param props.maxButtonCount maximum number of items to display in-line
 * @param props.size size of button ('small','medium', 'large'; default: 'medium')
 */
class ButtonSelectGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: props.selectedItem };
  }

  handleClick(item) {
    this.setState({ selectedItem: item });
    if (this.props.onClick) {
      this.props.onClick(item);
    }
  }

  render() {
    const {
      items, size, maxButtonCount,
    } = this.props;
    const { selectedItem } = this.state;

    const MAX_BUTTON_COUNT_MINUS_1 = maxButtonCount - 1;

    const directButtons = items.slice(0, MAX_BUTTON_COUNT_MINUS_1).map(item => (
      <Button
        key={item.id}
        variant={item === selectedItem ? 'raised' : 'flat'}
        onClick={() => this.handleClick(item)}
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
        onChange={(event) => {
          this.handleClick(itemsInSelect.find((val, index) => index === event.target.value));
        }}
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
  }
}

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
