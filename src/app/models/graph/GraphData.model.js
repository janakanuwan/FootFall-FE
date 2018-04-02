import {Record} from '../Model';

const GraphData = Record({
  name: String,
  IN: Number,
  OUT: Number,
  PRESENCE: Number
}, 'GraphData');

export default GraphData;
