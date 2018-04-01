import React from 'react';
import PropTypes from 'prop-types';

import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

import ListSelect from './../../common-ui/ListSelect';

import {List, Merchant} from 'Models';

/**
 *
 * @param merchantList{array} array of merchants with 'id' and 'name' properties
 * @param selectedMerchant{object}
 * @param onSelect(merchant) fired at a select change
 */
const MerchantOverview = ({merchantList, selectedMerchant, onSelect}) => {

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
            items={merchantList}
            selectedItem={selectedMerchant}
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
  merchantList: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired
    ),
    PropTypes.instanceOf(List)
  ]).isRequired,
  selectedMerchant: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
    }),
    PropTypes.instanceOf(Merchant)
  ]).isRequired,
  onSelect: PropTypes.func.isRequired
};

export default MerchantOverview;
