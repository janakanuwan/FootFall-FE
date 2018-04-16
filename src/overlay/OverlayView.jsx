import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Overlay from './ui/Overlay';

const Overlays = ({ list }) => (
  <div>
    {list.map(({ id, title, message }) =>
      <Overlay key={id} title={title} message={message} />)}
  </div>
);

Overlays.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = (state) => {
  const overlay = state.get('overlay');
  console.log(overlay);
  return {
    list: overlay.get('list'),
  };
};

const OverlayView = connect(mapStateToProps)(Overlays);

export default OverlayView;
