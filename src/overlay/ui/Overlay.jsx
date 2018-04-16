import React from 'react';
import PropTypes from 'prop-types';

import Dialog, { DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';

const Overlay = ({ title, message, open, onClose }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        {message}
      </DialogContentText>
    </DialogContent>
  </Dialog>
);

Overlay.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Overlay;

