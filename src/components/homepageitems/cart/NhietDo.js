import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { WiThermometer } from 'weather-icons-react';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height: 180,
    margin: '0 2px',
    padding: theme.spacing(2),
    backgroundColor: props => getBackgroundColor(props.temperature),
    position: 'relative',
    border: '2px solid #3f51b5', // Add a border with a specific color and thickness
    borderRadius: theme.shape.borderRadius, // Optional: To keep the border's corners rounded
  },
  iconContainer: {
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    backgroundColor: 'transparent',
    padding: theme.spacing(1),
    borderRadius: '50%',
  },
  cardHeader: {
    paddingLeft: '50px',
    '& div span': {
      fontSize: '18px',
      fontWeight: 'bold', // Make the header title bold
    },
  },
  temperatureText: {
    fontSize: '22px', // Increase font size for temperature value
    fontWeight: 'bold', // Make the temperature value bold
  },
}));

function getBackgroundColor(temperature) {
  const maxTemp = 40;
  const intensity = Math.min(255, Math.floor((temperature / maxTemp) * 255));
  return `rgba(255, 0, 0, ${intensity / 255})`;
}

export default function TemperatureCard() {
  const temperature = 19;
  const classes = useStyles({ temperature });

  return (
    <Card className={classes.root}>
      <div className={classes.iconContainer}>
        <WiThermometer size={40} color="#3f51b5" />
      </div>
      <CardHeader
        className={classes.cardHeader}
        title="Nhiệt độ (°C)"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2" className={classes.temperatureText}>
          {`${temperature}°C`}
        </Typography>
      </CardContent>
    </Card>
  );
}
