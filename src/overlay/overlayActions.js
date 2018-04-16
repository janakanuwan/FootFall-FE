import { createAction } from 'redux-actions';

import { HIDE_OVERLAY, SHOW_OVERLAY } from "../const/action-types";

const showOverlay = createAction(
  SHOW_OVERLAY,
  overlayData => overlayData,
);

const hideOverlay = createAction(
  HIDE_OVERLAY,
  overlayData => overlayData,
);

export { showOverlay, hideOverlay };
