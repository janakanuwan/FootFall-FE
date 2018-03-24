import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

/**
 * @param props.itemList list of names for buttons
 * @param props.selectedIndex {number} selected index from itemList
 *
 * @param props.onClick(index {number}) fired at clicking a button
 *
 * @param props.size {'small'|'medium'|'large'} size of button (default: 'medium')
 */
class ButtonGroup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selectedIndex: props.selectedIndex};
  }

  handleClick(index) {
    this.setState({selectedIndex: index});
    this.props.onClick(index);
  };

  render() {
    const selectedIndex = this.state.selectedIndex;
    const size = this.props.size;

    return (
      <div>
        {this.props.itemList.map((item, index) =>
          <Button
            key={index}
            children={item}
            variant={index === selectedIndex ? "raised" : "flat"}
            onClick={() => this.handleClick(index)}
            size={size}
          />
        )}
      </div>
    );
  };
}

ButtonGroup.propTypes = {
  itemList: PropTypes.arrayOf(Object).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ButtonGroup.defaultProps = {
  size: 'medium'
};


export default ButtonGroup;

