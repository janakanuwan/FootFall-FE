import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { formatDate, formatTime } from "./DayCountHelper";

const styles = (theme) => ({
  paperCount: {
    padding: theme.spacing.unit * 2,
    width: '50%',
    textAlign: "center",
    backgroundColor: theme.palette.primary.light
  }
});

/**
 * @param props.dayName name of the day (e.g. Today)
 * @param props.date date & time to be displayed
 * @param props.count visitor count at the given date and time
 */
const DayCount = (props) => {

  const { dayName, date, count, classes } = props;

  return (
    <div>
      <br />

      <Paper elevation={4}>
        <Grid container alignItems="center" justify="center" direction="row">

          <Grid item xs>
            <Typography variant="headline" component="h3">
              {dayName}
            </Typography>
          </Grid>

          <Grid item xs>
            <Typography variant="headline" component="h5">
              {formatDate(date)}
            </Typography>
            <Typography variant="headline" component="h6">
              {formatTime(date)}
            </Typography>
          </Grid>

          <Grid item xs>
            <Typography component="p">
              Visiting Customers
            </Typography>
            <Paper elevation={16} className={classes.paperCount}>
              <Typography variant="headline" component="h4">
                {count}
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Paper>

      <br />
    </div>
  );
};

DayCount.propTypes = {
  dayName: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]).isRequired,
  count: PropTypes.number.isRequired
};

export default withStyles(styles)(DayCount);
