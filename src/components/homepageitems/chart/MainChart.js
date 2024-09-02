import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const data = [
  { time: '00:01', temperature: 20, humidity: 65, light: 400 },
  { time: '00:02', temperature: 22, humidity: 60, light: 420 },
  { time: '00:03', temperature: 21, humidity: 70, light: 440 },
  { time: '00:04', temperature: 23, humidity: 75, light: 460 },
  { time: '00:05', temperature: 24, humidity: 80, light: 480 },
  { time: '00:06', temperature: 22, humidity: 65, light: 500 },
  { time: '00:07', temperature: 21, humidity: 70, light: 520 },
  { time: '00:08', temperature: 20, humidity: 75, light: 540 },
  { time: '00:09', temperature: 19, humidity: 80, light: 560 },
  { time: '00:10', temperature: 18, humidity: 85, light: 580 },
];

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height: 500,
    display: 'flex',
    marginTop: theme.spacing(-55),
  },
}));

const MainChart = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 40, left: 10, bottom: 5 }} 
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="time"
            label={{
              value: "Thời gian (phút)",
              position: "insideBottomRight",
              offset: 0,
              style: { fontWeight: 'bold' }
            }}
          />
          <YAxis
            yAxisId="left"
            domain={[15, 30]} // Limit the temperature axis range from 15 to 30 °C
            label={{
              value: "Nhiệt độ (°C)",
              angle: -90,
              position: "insideLeft",
              style: { fontWeight: 'bold' }
            }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100]} // Limit the light/humidity axis range from 0 to 100% or 1000 Lux
            label={{
              value: "Ánh sáng (Lux) - Độ ẩm (%)",
              angle: -90,
              position: "insideRight",
              offset: 15, // Add an offset to separate the labels
              style: { fontWeight: 'bold', textAnchor: 'middle' } 
            }}
          />
          <Tooltip />
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ fontWeight: 'bold' }} // Make Legend text bold
          />
          <Area yAxisId="left" type="monotone" dataKey="temperature" stroke="#1f77b4" fill="#1f77b4" fillOpacity={0.2} name="Nhiệt độ (°C)" /> {/* Blue */}
          <Area yAxisId="right" type="monotone" dataKey="humidity" stroke="#ff7f0e" fill="#ff7f0e" fillOpacity={0.2} name="Độ ẩm (%)" /> {/* Orange/Yellow */}
          <Area yAxisId="right" type="monotone" dataKey="light" stroke="#e377c2" fill="#e377c2" fillOpacity={0.2} name="Ánh sáng (Lux)" /> {/* Pink */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MainChart;
