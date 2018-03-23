import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

import {formatDate, formatTime} from "./DayCountHelper";

const styles= (theme) => ({
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

  const {dayName, date, count, classes} = props;

  return (
    <div>
      <Paper elevation={4}>
        <Grid container alignItems="center" justify="center" direction="row">

          <Grid item xs>
            <Typography variant="headline" component="h3">
              {dayName}
            </Typography>
          </Grid>

          <Grid item xs>
            <Typography variant="headline" component="h3">
              {formatDate(date)}
            </Typography>
            <Typography variant="headline" component="h5">
              {formatTime(date)}
            </Typography>
          </Grid>

          <Grid item xs>
            <Typography component="p">
              Visiting Customers
            </Typography>
            <Paper elevation={8} className={classes.paperCount}>
              <Typography variant="headline" component="h3">
                {count}
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Paper>
    </div>
  );
};

DayCount.propTypes = {
  dayName: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  count: PropTypes.number.isRequired
};

export default withStyles(styles)(DayCount);
