import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles, withTheme } from 'material-ui/styles';

const styles = theme => ({
  countValue: {
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit,
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#FFD740',
  },
  countName: {
    paddingRight: theme.spacing.unit * 2,
  },
});

/**
 * @param props.dayName name of the day (e.g. Today)
 * @param props.date date & time to be displayed
 * @param props.count visitor count at the given date and time
 */
const DayCount = (props) => {
  const {
    dayName, day, time, count, classes,
  } = props;

  return (
    <Paper elevation={8}>
      <Grid container alignItems="center" justify="center" direction="row">
        <Grid item xs>
          <Typography variant="headline" component="h3">
            &nbsp;&nbsp;&nbsp;&nbsp;{dayName}
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="center" justify="flex-end" direction="column">
            <Typography variant="headline" component="h5">
              {day}
            </Typography>
            <Typography variant="headline" component="h6">
              {time}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs>
          <Grid container alignItems="flex-end" justify="center" direction="column">
            <Typography component="p" className={classes.countName}>
                Visiting Customers
            </Typography>
            <Paper elevation={16} className={classes.countValue}>
              <Typography variant="headline" component="h4">
                {count}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

DayCount.propTypes = {
  dayName: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,

  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default withTheme()(withStyles(styles)(DayCount));
