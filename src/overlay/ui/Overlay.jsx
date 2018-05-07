import React from 'react';
import PropTypes from 'prop-types';

import Dialog, { DialogContent, DialogContentText, DialogTitle } from 'material-ui/Dialog';
import { withTheme } from 'material-ui/styles';

const Overlay = ({
  title, message, open, onClose,
}) => (
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
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

Overlay.defaultProps = {
  open: true,
  onClose: () => {
    // DO NOTHING
  },
};

export default withTheme()(Overlay);

