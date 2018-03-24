import React from 'react';
import PropTypes from 'prop-types';

import {CartesianGrid, Label, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const IN_COLOR = "#12939A";
const OUT_COLOR = "#FF9833";
const PRESENT_COLOR = "#1A3177";

const X_AXIS_WIDTH = 40;
const Y_AXIS_WIDTH = 65;

const CHART_MARGIN = {top: 5, right: 20, left: 20, bottom: 5};

const ACTIVE_DOT = {
  r: 8
};

/**
 *
 * @param props.data data array for chart in [{name:<string>, IN:<number>, OUT: <number>, PRESENCE: <number> },...] format
 * @param props.displayIn if true, display IN data
 * @param props.displayOut if true, display OUT data
 * @param props.displayPresence if true, display PRESENCE data
 * @param props.height chart height
 * @param props.width chart width
 * @param props.yAxisLabel Y-axis label
 * @param props.legend if true, display legend
 * @param props.tooltip if true, display tooltip
 * @param props.grid if true, display grid
 */
const CountChart = (props) => {

  return (
    <ResponsiveContainer width={props.width} height={props.height}>
      <LineChart data={props.data} margin={CHART_MARGIN}>

        <XAxis dataKey="name" height={X_AXIS_WIDTH}/>
        <YAxis width={Y_AXIS_WIDTH}>
          <Label value={props.yAxisLabel} angle={-90} position="left"/>
        </YAxis>

        {props.grid && <CartesianGrid strokeDasharray="3 3"/>}
        {props.tooltip && <Tooltip/>}
        {props.legend && <Legend verticalAlign="bottom"/>}

        <Line strokeWidth={2} type="monotone" activeDot={ACTIVE_DOT}
              dataKey={props.displayIn ? "IN" : "IN*"}
              stroke={IN_COLOR}/>
        <Line strokeWidth={2} type="monotone" activeDot={ACTIVE_DOT}
              dataKey={props.displayOut ? "OUT" : "OUT*"}
              stroke={OUT_COLOR}/>
        <Line strokeWidth={3} type="monotone" activeDot={ACTIVE_DOT}
              dataKey={props.displayPresence ? "PRESENCE" : "PRESENCE*"}
              stroke={PRESENT_COLOR}/>

      </LineChart>
    </ResponsiveContainer>
  );
};

CountChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  displayIn: PropTypes.bool.isRequired,
  displayOut: PropTypes.bool.isRequired,
  displayPresence: PropTypes.bool.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  yAxisLabel: PropTypes.string,
  legend: PropTypes.bool,
  tooltip: PropTypes.bool,
  grid: PropTypes.bool
};

CountChart.defaultProps = {
  displayIn: true,
  displayOut: true,
  displayPresence: true,
  height: 400,
  width: "60%",
  yAxisLabel: "Count",
  legend: true,
  tooltip: true,
  grid: true
};

export default CountChart;
