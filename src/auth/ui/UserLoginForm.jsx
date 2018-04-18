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

// position: 'absolute',
// top: '50%',
// left: '50%',
// transform: 'translate(-50%, -50%)',

const styles = theme => ({
  paper: {
    width: '50%',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,

    marginTop: theme.spacing.unit * 3,
  },
});

/**
 * @param props.onSubmit ({email, password, rememberMe})
 */
class UserLoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: props.email,
      password: props.password,
      rememberMe: props.rememberMe,
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
    const { classes, emailError, passwordError } = this.props;
    const { email, password, rememberMe } = this.state;

    return (
      <div align="center">
        <Paper elevation={4} className={classes.paper}>
          <Typography variant="headline" component="h2">
            Login
          </Typography>
          <Divider />

          <form autoComplete="on" onSubmit={this.handleSubmit}>

            <TextField
              label="Email"
              name="email"
              required
              margin="normal"
              autoFocus
              onChange={this.handleChange}
              value={email}
              error={emailError}
              helperText={undefined}
            />
            <br />

            <TextField
              label="Password"
              name="password"
              type="password"
              required
              margin="normal"
              onChange={this.handleChange}
              value={password}
              error={passwordError}
              helperText={undefined}
            />
            <br />

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
            <br />

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
  email: PropTypes.string,
  password: PropTypes.string,
  rememberMe: PropTypes.bool,
  emailError: PropTypes.bool,
  passwordError: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,

  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

UserLoginForm.defaultProps = {
  email: '',
  password: '',
  rememberMe: false,
  emailError: false,
  passwordError: false,
};

export default withStyles(styles)(UserLoginForm);
