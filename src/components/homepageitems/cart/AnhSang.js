import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { MdLightMode } from "react-icons/md";
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300, 
    height: 180,
    margin: '0 45px',
    padding: theme.spacing(2),
    backgroundColor: props => `rgba(255, 255, 0, ${props.lightLevel / 1000})`,
    transition: 'background-color 0.3s ease',
    position: 'relative',
    border: '2px solid #ccc', // Add border to the card
    borderRadius: '8px', // Optional: Add rounded corners to the card
  },
  cardHeader: {
    '& div span': {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '-12px',
    },
  },
  lightLevelContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(2),
  },
  progressBar: {
    width: '100%',
    marginLeft: theme.spacing(2),
  },
  badgeText: {
    paddingLeft: '5px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  sunIcon: {
    fontSize: '28px', // Increase the size of the icon
    marginRight: theme.spacing(1),
    marginTop: '-10px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default function LightIntensitySingleRoom() {
  const lightLevel = 500;

  const classes = useStyles({ lightLevel });

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.cardHeader}
        title={
          <div className={classes.iconContainer}>
            <MdLightMode className={classes.sunIcon} />
            Ánh sáng (lux)
          </div>
        }
      />
      <CardContent>
        <div className={classes.lightLevelContainer}>
          <Typography className={classes.badgeText}>
            {`${lightLevel} lux`}
          </Typography>
          <LinearProgress
            className={classes.progressBar}
            variant="determinate"
            value={(lightLevel / 1000) * 100}
            color="primary"
          />
        </div>
      </CardContent>
    </Card>
  );
}
