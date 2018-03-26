import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

/**
 * @param props.data array of data in {id:<ID>, name: <NAME> } format
 * @param props.selectedIndex {number} selected index from data
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
        {this.props.data.map((item, index) =>
          <Button
            key={item.id}
            children={item.name}
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
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ButtonGroup.defaultProps = {
  size: 'medium'
};


export default ButtonGroup;

