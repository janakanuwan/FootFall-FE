import { Record } from '../Model';

const GraphData = Record({
  NAME: String,
  IN: Number,
  OUT: Number,
  PRESENCE: Number
}, 'GraphData');

export default GraphData;
