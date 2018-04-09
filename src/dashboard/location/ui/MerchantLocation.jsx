import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ButtonSelectGroup from './../../common-ui/ButtonSelectGroup';

import { List, Location } from 'Models';


/**
 *
 * @param locationList{array} array of location list with 'id' and 'name'
 * @param selectedLocation
 * @param onClick(location) fired at a select change
 */
const MerchantLocation = ({ locationList, selectedLocation, onClick }) => {

  return (
    <div>
      <br />

      <Grid container alignItems="center" justify="center" direction="row" spacing={8}>
        <Grid item xs={4}>
          <Typography variant="headline" component="h2">
            Location
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <ButtonSelectGroup
            items={locationList}
            selectedItem={selectedLocation}
            onClick={onClick}
            maxButtonCount={4}
          />
        </Grid>
      </Grid>

      <br />
    </div>
  );
};


MerchantLocation.propTypes = {
  locationList: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
    PropTypes.instanceOf(List)
  ]).isRequired,
  selectedLocation: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }),
    PropTypes.instanceOf(Location)
  ]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default MerchantLocation;
