import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import ListSelect from './../../common-ui/ListSelect';

/**
 *
 * @param merchantList{array} array of merchant list with 'id' and 'name'
 * @param selectedIndex{number}
 * @param onSelect(index{number}) fired at a select change
 */
const MerchantOverview = ({merchantList, selectedIndex, onSelect}) => {
  return (
    <div>
      <br/>

      <Grid container alignItems="center" justify="center" direction="row" spacing={8}>
        <Grid item xs>
          <Typography variant="headline">
            Overview
          </Typography>
        </Grid>

        <Grid item xs>
          <ListSelect
            data={merchantList}
            selectedIndex={selectedIndex}
            onSelect={onSelect}
          />
        </Grid>
      </Grid>

      <br/>
      <Divider/>
    </div>
  );
};

MerchantOverview.propTypes = {
  merchantList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default MerchantOverview;
