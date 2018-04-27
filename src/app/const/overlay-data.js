import OverlayData from '../models/OverlayData.model';

const OVERLAY_DATA_FETCH_USER
  = OverlayData({ id: 'user_login', title: 'Loading...', message: 'Authenticating ..,.' });

const OVERLAY_DATA_FETCH_MERCHANTS
  = OverlayData({ id: 'merchants_fetch', title: 'Loading...', message: 'Loading merchants ..,.' });

const OVERLAY_DATA_FETCH_LOCATIONS
  = OverlayData({ id: 'locations_fetch', title: 'Loading...', message: 'Loading locations ..,.' });

const overlayDataFetchEntries = location => OverlayData({
  id: `entries_fetch_${location.id}`,
  title: 'Loading...',
  message: `Loading entries at ${location.name}`,
});

export {
  OVERLAY_DATA_FETCH_USER,
  OVERLAY_DATA_FETCH_MERCHANTS,
  OVERLAY_DATA_FETCH_LOCATIONS,
  overlayDataFetchEntries,
};
