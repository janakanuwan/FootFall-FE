import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import { withTheme } from 'material-ui/styles';

import ButtonSelectGroup from './../../common-ui/ButtonSelectGroup';

import { List, Location } from 'Models';


/**
 *
 * @param locationList{array} array of location list with 'id' and 'name'
 * @param selectedLocation
 * @param onClick(location) fired at a select change
 */
const MerchantLocation = ({ locationList, selectedLocation, onClick }) => (
  <Paper elevation={0}>
    <br />

    <Grid container alignItems="center" justify="flex-end" direction="row" spacing={8}>
      <Grid item xs>
        <Typography variant="headline" component="h2">
          Location
        </Typography>
      </Grid>

      <Grid item xs>
        <ButtonSelectGroup
          items={locationList}
          selectedItem={selectedLocation}
          onClick={onClick}
          maxButtonCount={4}
        />
      </Grid>
    </Grid>

    <br />
  </Paper>
);


MerchantLocation.propTypes = {
  locationList: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired),
    PropTypes.instanceOf(List),
  ]).isRequired,
  selectedLocation: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }),
    PropTypes.instanceOf(Location),
  ]).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withTheme()(MerchantLocation);
