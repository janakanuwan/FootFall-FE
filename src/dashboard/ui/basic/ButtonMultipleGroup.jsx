import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

/**
 * @param props.data array of names for buttons
 * @param props.selectedIndices [{number}] array of selected indices from data
 *
 * @param props.onClick([indices]) fired at clicking a button with new selected indices
 *
 * @param props.size {'small'|'medium'|'large'} size of button (default: 'medium')
 */
class ButtonMultipleGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedIndices: props.selectedIndices ? props.selectedIndices : []};
  }

  handleClick(index) {
    const selectedIndices = this.state.selectedIndices;
    const newIndices = selectedIndices.includes(index) ?
      selectedIndices.filter(item => item !== index) : selectedIndices.concat(index);
    this.setState({selectedIndices: newIndices});

    this.props.onClick(newIndices.slice());
  }

  render() {
    const selectedIndices = this.state.selectedIndices;
    const size = this.props.size;

    return (
      <div>
        {this.props.data.map((item, index) =>
          <Button
            key={index}
            children={item}
            variant={selectedIndices.includes(index) ? "raised" : "flat"}
            onClick={() => this.handleClick(index)}
            size={size}
          />
        )}
      </div>
    );
  }
}

ButtonMultipleGroup.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndices: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};

ButtonMultipleGroup.defaultProps = {
  size: 'medium'
};

export default ButtonMultipleGroup;
