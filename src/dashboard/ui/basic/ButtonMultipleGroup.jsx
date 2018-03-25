import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';

class ButtonMultipleGroup extends React.Component{
  constructor(props){
    super(props);

    this.state = { selected : [] };
  }

  render(){
    return (
      <div>

      </div>
    );
  }
}

ButtonMultipleGroup.propTypes = {
  itemList: PropTypes.arrayOf(Object).isRequired,
};
