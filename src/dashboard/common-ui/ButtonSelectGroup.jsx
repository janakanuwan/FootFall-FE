import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';


// style={{
//   textTransform: 'none', 'capitalize', 'uppercase'
// }}

/**
 * @param props.data array of data in {id:<ID>, name: <NAME> } format
 * @param props.selectedIndex selected index from data
 *
 * @param props.onClick({item, index}) fired at clicking a button
 *
 * @param props.maxButtonCount maximum number of items to display in-line
 * @param props.size size of button ('small','medium', 'large'; default: 'medium')
 */
class ButtonSelectGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedIndex: props.selectedIndex};
  }

  handleClick(index) {
    this.setState({selectedIndex: index});
    this.props.onClick({item: this.props.data[index], index: index});
  };

  render() {
    const itemList = this.props.data;
    const selectedIndex = this.state.selectedIndex;
    const size = this.props.size;

    const MAX_BUTTON_COUNT_MINUS_1 = this.props.maxButtonCount - 1;

    const directButtons = itemList.slice(0, MAX_BUTTON_COUNT_MINUS_1).map((item, index) =>
      <Button
        key={item.id}
        children={item.name}
        variant={index === selectedIndex ? "raised" : "flat"}
        onClick={() => this.handleClick(index)}
        size={size}
      />
    );

    const buttonsInSelect = itemList.slice(MAX_BUTTON_COUNT_MINUS_1).map((item, index) => {
      const modifiedIndex = index + MAX_BUTTON_COUNT_MINUS_1;
      return (
        <Button
          key={item.id}
          children={item.name}
          variant={modifiedIndex === selectedIndex ? "raised" : "flat"}
          size={size}

          value={modifiedIndex}
        />
      );
    });

    const selectComponent = buttonsInSelect.length === 0 ? null :
      <Select
        value={selectedIndex > MAX_BUTTON_COUNT_MINUS_1 ? selectedIndex : MAX_BUTTON_COUNT_MINUS_1}
        onChange={(event) => this.handleClick(event.target.value)}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  maxButtonCount: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ButtonSelectGroup.defaultProps = {
  maxButtonCount: 4,
  size: 'medium'
};

export default ButtonSelectGroup;
