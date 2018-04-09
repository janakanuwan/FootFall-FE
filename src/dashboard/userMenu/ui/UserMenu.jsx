import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

import { User } from 'Models';

/**
 * @userName: logged in user's name
 * @userEmail: logged in user's email
 *
 * @onLogout({username, userEmail}): fired on 'Logout' menu click
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
    const userName = this.props.user && this.props.user.userName;
    const userEmail = this.props.user && this.props.user.userEmail;

    const { anchorEl } = this.state;

    return (
      <div align="right">
        <Button
          aria-owns={anchorEl ? 'simple-user-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {userName}
        </Button>
        <Menu
          id="simple-user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Profile ({userEmail})</MenuItem>
          <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    );
  }
}

UserMenu.propTypes = {
  user: PropTypes.oneOfType([PropTypes.shape({
    user: PropTypes.string,
    userEmail: PropTypes.string,
  }),
    PropTypes.instanceOf(User),
  ]).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
