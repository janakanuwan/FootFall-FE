import { Record, Union } from './Model';

const OverlayData = Record({
  id: Union(String, Number),
  title: String,
  message: String,
}, 'OverlayData');

export default OverlayData;
