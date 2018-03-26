import React from 'react';
import PropTypes from 'prop-types';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import ButtonSelectGroup from './../../common-ui/ButtonSelectGroup';

/**
 *
 * @param locationList{array} array of merchant list with 'id' and 'name'
 * @param selectedIndex{number}
 * @param onSelect({location, index}) fired at a select change
 */
const MerchantLocation = ({locationList, selectedIndex, onClick}) => {

  const handleClick = ({item, index}) => {
    onClick({location: locationList[index], index: index});
  };

  return (
    <div>
      <br/>

      <Grid container alignItems="center" justify="center" direction="row" spacing={8}>
        <Grid item xs={4}>
          <Typography variant="headline" component="h2">
            Location
          </Typography>
        </Grid>

        <Grid item xs={8}>
          <ButtonSelectGroup
            data={locationList}
            selectedIndex={selectedIndex}
            onClick={handleClick}
            maxButtonCount={4}
          />
        </Grid>
      </Grid>

      <br/>
    </div>
  );
};


MerchantLocation.propTypes = {
  locationList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default MerchantLocation;
