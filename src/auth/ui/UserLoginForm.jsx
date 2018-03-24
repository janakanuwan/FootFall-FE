import React from 'react';
import {FormControlLabel} from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {withStyles} from 'material-ui/styles';

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
 * FIXME
 */
const UserLoginForm = (props) => {

  const {classes} = props;

  return (
    <div align="center">

      <Paper elevation={4} className={classes.paper}>
        <Typography variant="headline" component="h2">
          Login
        </Typography>
        <Divider/>

        <form autoComplete="on">

          <TextField
            label="User Email"
            name="userEmail"
            required
            margin="normal"
            autoFocus
          />
          <br/>

          <TextField
            label="Password"
            name="userPassword"
            type="password"
            required
            margin="normal"
          />
          <br/>

          <FormControlLabel
            label="Remember me"
            control={
              <Checkbox
                name="isRememberMe"
                color="primary"
              />
            }
          />
          <br/>

          <Button type="submit" color="primary" variant="raised">
            Log in
          </Button>

        </form>
      </Paper>

    </div>
  );
};

export default withStyles(styles)(UserLoginForm);
