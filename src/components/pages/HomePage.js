import React from 'react';
import { Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NhietDo from '../homepageitems/cart/NhietDo';
import DoAm from '../homepageitems/cart/DoAm';
import AnhSang from '../homepageitems/cart/AnhSang';
import MainChart from '../homepageitems/chart/MainChart';
import ControlPanel from '../homepageitems/button/button'; 

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: '100%', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  controlPanel: {
    marginTop: theme.spacing(2),
    width: '80%',  
    margin: '0 auto',
  },
  chartContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullHeightGridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box className={classes.card}>
            <NhietDo />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box className={classes.card}>
            <DoAm />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.fullHeightGridItem}>
          <Box className={classes.card}>
            <AnhSang />
            <ControlPanel className={classes.controlPanel} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Box className={classes.chartContainer}>
            <MainChart />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
