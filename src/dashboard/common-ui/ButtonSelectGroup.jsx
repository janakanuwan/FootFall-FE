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
    this.state = {selectedItem: props.selectedItem};
  }

  handleClick(item) {
    this.setState({selectedItem: item});
    if (this.props.onClick) {
      this.props.onClick(item);
    }
  };

  render() {
    const itemList = this.props.items;
    const selectedItem = this.state.selectedItem;
    const size = this.props.size;

    const MAX_BUTTON_COUNT_MINUS_1 = this.props.maxButtonCount - 1;

    const directButtons = itemList.slice(0, MAX_BUTTON_COUNT_MINUS_1).map((item) =>
      <Button
        key={item.id}
        children={item.name}
        variant={item === selectedItem ? "raised" : "flat"}
        onClick={() => this.handleClick(item)}
        size={size}
      />
    );

    const itemsInSelect = itemList.slice(MAX_BUTTON_COUNT_MINUS_1);
    const buttonsInSelect = itemsInSelect.map((item, index) => {
      return (
        <Button
          key={item.id}
          children={item.name}
          variant={item === selectedItem ? "raised" : "flat"}
          size={size}

          value={index}
        />
      );
    });

    const selectComponent = itemsInSelect.length === 0 ? null :
      <Select
        value={itemsInSelect.indexOf(selectedItem)}
        onChange={(event) => this.handleClick(itemsInSelect[event.target.value])}
      >
        {buttonsInSelect}
      </Select>
    ;

    return (
      <div>
        {directButtons}
        {selectComponent}
      </div>
    );
  }
}

ButtonSelectGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ),
  selectedItem: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
  maxButtonCount: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ButtonSelectGroup.defaultProps = {
  maxButtonCount: 4,
  size: 'medium'
};

export default ButtonSelectGroup;
