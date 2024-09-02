import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { WiHumidity } from 'weather-icons-react';

const useStyles = makeStyles(theme => ({
  root: {
    width: 300,
    height: 180,
    margin: '0 32px',
    padding: theme.spacing(2),
    backgroundColor: props => getBackgroundColor(props.humidity),
    position: 'relative',
    transition: 'background-color 0.3s ease', // Smooth background transition
    border: '2px solid #3f51b5', // Add a border with specific color and thickness
    borderRadius: theme.shape.borderRadius, // Optional: Keep border's corners rounded
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
  badgeText: {
    paddingLeft: '5px',
    fontSize: '20px', // Increase the font size for humidity value
    fontWeight: 'bold', // Make the humidity value bold
  },
}));

function getBackgroundColor(humidity) {
  const maxHumidity = 100; 
  const intensity = Math.min(255, Math.floor((humidity / maxHumidity) * 255));
  return `rgba(0, 0, 255, ${intensity / 255})`; 
}

export default function HumidityCard() {
  const humidity = 50; 
  const classes = useStyles({ humidity });

  return (
    <Card className={classes.root}>
      <div className={classes.iconContainer}>
        <WiHumidity size={40} color="#FFFFFF" />
      </div>
      <CardHeader
        className={classes.cardHeader}
        title="Độ ẩm (%)"
      />
      <CardContent>
        <Typography 
          gutterBottom 
          variant="h6" 
          component="h2" 
          className={classes.badgeText} // Apply larger font size and bold style
        >
          {`${humidity}%`} 
        </Typography>
      </CardContent>
    </Card>
  );
}
