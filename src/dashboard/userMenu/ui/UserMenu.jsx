import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { withTheme } from 'material-ui/styles';

import { User } from 'Models';

/**
 * @param props.user {object} logged in user
 *
 * @param props.onLogout({User}) fired on 'Logout' menu click
 */
class UserMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = { anchorEl: null };

    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleLogout() {
    this.handleClose();
    this.props.onLogout(this.props.user);
  }

  render() {
    const { name, email } = this.props.user;

    const { anchorEl } = this.state;

    return (
      <div align="right">
        <Paper elevation={0}>

          <Button
            aria-owns={anchorEl ? 'simple-user-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            {name}
          </Button>
          <Menu
            id="simple-user-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>Profile ({email})</MenuItem>
            <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
          </Menu>

        </Paper>
      </div>
    );
  }
}

UserMenu.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
    PropTypes.instanceOf(User),
  ]).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default withTheme()(UserMenu);
