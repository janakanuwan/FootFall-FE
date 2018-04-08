import React from 'react';
import PropTypes from 'prop-types';

import { FormControlLabel } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';

const styles = (theme) => ({
  paper: {
    width: "50%",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: theme.spacing.unit * 3,
  }
});

/**
 * @param props.onSubmit ({userEmail, userPassword, rememberMe})
 */
class UserLoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userEmail: props.userEmail,
      userPassword: props.userPassword,
      rememberMe: props.rememberMe
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.onSubmit) {
      this.props.onSubmit(Object.assign({}, this.state));
    }
  }

  handleChange(e) {
    const { name, value, checked } = e.target;

    if (name === 'rememberMe') {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }


  render() {
    const { classes, userEmailError, userPasswordError } = this.props;
    const { userEmail, userPassword, rememberMe } = this.state;

    return (
      <div align="center">
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="headline" component="h2">
            Login
          </Typography>
          <Divider/>

          <form autoComplete="on" onSubmit={this.handleSubmit}>

            <TextField
              label="User Email"
              name="userEmail"
              required
              margin="normal"
              autoFocus
              onChange={this.handleChange}
              value={userEmail}
              error={userEmailError}
              helperText={undefined}
            />
            <br/>

            <TextField
              label="Password"
              name="userPassword"
              type="password"
              required
              margin="normal"
              onChange={this.handleChange}
              value={userPassword}
              error={userPasswordError}
              helperText={undefined}
            />
            <br/>

            <FormControlLabel
              label="Remember me"
              control={
                <Checkbox
                  name="rememberMe"
                  color="primary"
                  onChange={this.handleChange}
                  checked={rememberMe}
                />
              }
            />
            <br/>

            <Button type="submit" color="primary" variant="raised" disabled={false}>
              Log in
            </Button>

          </form>
        </Paper>

      </div>
    );
  }
}


UserLoginForm.propTypes = {
  userEmail: PropTypes.string,
  userPassword: PropTypes.string,
  rememberMe: PropTypes.bool,
  userEmailError: PropTypes.bool,
  userPasswordError: PropTypes.bool,
  onSubmit: PropTypes.func,
};

UserLoginForm.defaultProps = {
  userEmail: '',
  userPassword: '',
  rememberMe: false,
  userEmailError: false,
  userPasswordError: false,
};

export default withStyles(styles)(UserLoginForm);
